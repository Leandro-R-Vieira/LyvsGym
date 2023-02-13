import { HStack, Text, Heading, VStack, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'
import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";
import { useAuth } from "@hooks/useAuth";

export function HomeHeader() {
  const { user } = useAuth();

  return (
    <HStack bg='gray.600' pt={16} pb={5} px={8} alignItems='center'>
      <UserPhoto
        source={{ uri: 'https://github.com/Leandro-R-Vieira.png' }}
        size={16}
        alt='Imagem do usuário'
        mr={4}
      />
      <VStack flex={1}>
        <Text color='gray.100' fontSize='md'>Hi,</Text>
        <Heading color='gray.100' fontSize='md' fontFamily='heading'>
          {user.name}
        </Heading>
      </VStack>
      <TouchableOpacity>
        <Icon
          as={MaterialIcons}
          name='logout'
          color='gray.200'
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  )
}