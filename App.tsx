import { StatusBar, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Loading } from '@components/Loading';
import { THEME } from './src/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      {fontsLoaded ? <SignUp /> : <Loading />}
    </NativeBaseProvider>
  );
}

