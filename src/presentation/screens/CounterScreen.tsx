import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { AnimatedFAB, Button } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
export const CounterScreen = () => {
  const [counter, setCounter] = useState(0)

  const onIncrement = () => setCounter(counter + 1)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{counter}</Text>
      <AnimatedFAB
        style={stylesFAB.fabStyle}
        label=''
        icon={'plus'}
        animateFrom={'right'}
        iconMode={'static'} extended={false}
        onPress={onIncrement}
        onLongPress={() => setCounter(0)} />
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


const stylesFAB = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
});