import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealIds((currentFavIds) => {
      return [...currentFavIds, id];
    });
  }

  function removeFavorite(id) {
    // console.log('before', favoriteMealIds);
    // const ans = favoriteMealIds.filter((mealId) => {
    //   return mealId !== id;
    // });
    // console.log('after', ans);

    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => {
        return mealId !== id;
      })
    );
  }
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
