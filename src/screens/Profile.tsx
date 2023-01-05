import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Center, ScrollView, VStack, Skeleton } from "native-base";
import { useState } from "react";

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          {photoIsLoading ?
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded='full'
              startColor='darkBlue.600'
              endColor='darkBlue.800'
            />
            :
            <UserPhoto
              source={{ uri: 'https://github.com/Leandro-R-Vieira.png' }}
              alt='Foto do Usuário'
              size={PHOTO_SIZE}
            />}
        </Center>
      </ScrollView>

    </VStack>
  )
}