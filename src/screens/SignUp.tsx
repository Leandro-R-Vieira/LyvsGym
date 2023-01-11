import { useForm, Controller } from 'react-hook-form';
import LogoSvg from '@assets/logo.svg';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import BackgroundImg from '@assets/background.png';
import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';


export function SignUp() {
  const { control } = useForm();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine-se por inteiro
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>

          <Input
            placeholder='Nome'                       
          />

          <Input
            placeholder='E-mail'
            keyboardType='email-address'
            autoCapitalize='none'
          />

          <Input
            placeholder='Senha'
            secureTextEntry
          />

          <Input
            placeholder='Confirmar senha'
            secureTextEntry
          />

          <Button
            title='Criar e acessar'
          />
        </Center>
                 
          <Button
            title='Voltar para o login'
            variant='outline'
            mt={24}
            onPress={handleGoBack}
          />        
      </VStack>
    </ScrollView>
  );
}