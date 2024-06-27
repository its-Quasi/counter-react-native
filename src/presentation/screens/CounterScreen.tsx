import { useState } from "react"
import { Button, Pressable, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0)

  const onIncrement = () => setCounter(counter + 1)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{counter}</Text>
      <Pressable
        style={styles.button}
        onPress={onIncrement}
        onLongPress={() => setCounter(0)}
      >
        <Text style={styles.buttonText}> Increment</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300'
  },
  button: {
    backgroundColor: '#5856D6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10
  },
  buttonText: {
    color: 'white'
  }
})