import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export default function PrimaryButton({ children, onPress }) {
  function pressHandler(event) {
    console.log('PRESSED');
    // onPress();
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        } //pressed is passed in by react as a boolean.
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
    // width: '50%',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    // borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    //for IOS button animation
    opacity: 0.75,
  },
});
