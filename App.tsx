import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { CounterScreen } from './src/presentation/screens/CounterScreen';

export default function App() {
  return (
    <SafeAreaProvider>
        <CounterScreen />
    </SafeAreaProvider>
  );
}