import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, ScrollView, VStack } from "native-base";

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          <UserPhoto
            source={{ uri: 'https://github.com/Leandro-R-Vieira.png' }}
            alt='Foto do Usuário'
            size={33}
          />
        </Center>
      </ScrollView>

    </VStack>
  )
}