import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <CounterScreen />
      </PaperProvider>
    </SafeAreaProvider>
  );
}