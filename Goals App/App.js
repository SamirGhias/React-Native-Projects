// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, StatusBar } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    // console.log(`goal is: ${enteredGoalText}`);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }, // setting key for RN FlatList to detect and use
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    console.log('DELETE' + id);
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainter}>
        <Button
          title='Add New Goal'
          color='#a065ec'
          onPress={startAddGoalHandler}
          visible={modalIsVisible}
          // onMod
        ></Button>
        {modalIsVisible && (
          <GoalInput
            onAddGoal={addGoalHandler}
            onCancel={endAddGoalHandler}
          ></GoalInput>
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals} // Each items key value is automatically recognized as a primitive
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteGoal={deleteGoalHandler}
                  id={itemData.item.id}
                ></GoalItem>
              );
            }}
            // keyExtractor={(item, index) => item.id} // incase the item comes from backend with its own unique id
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainter: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },

  goalsContainer: {
    flex: 5,
  },
});
