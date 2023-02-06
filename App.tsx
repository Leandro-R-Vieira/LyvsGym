import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Loading } from '@components/Loading';
import { THEME } from './src/theme';
import { Routes } from './src/routes';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { AuthContext } from '@contexts/AuthContext';

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
      <AuthContext.Provider value={{
        id: '1',
        name: 'Leandro',
        email: 'leandro@gmail.com',
        avatar: 'avatar.png',
      }}>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContext.Provider>
    </NativeBaseProvider>
  );
}

