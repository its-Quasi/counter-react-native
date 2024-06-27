import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons'

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider settings={
        {
          icon: (props) => <IonIcon {...props} />
        }
      }>
        <CounterScreen />
      </PaperProvider>
    </SafeAreaProvider >
  );
}