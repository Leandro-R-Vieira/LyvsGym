import { useState } from "react";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { ExerciseCard } from "@components/ExerciseCard";
import { VStack, FlatList, HStack, Heading, Text } from "native-base";



export function Home() {
  const [groupSelected, setGroupSelected] = useState('Costas');
  const [groups, setGroups] = useState(['Costas', 'Ombros', 'Bíceps', 'Tríceps']);
  const [exercises, setExercises] = useState(['1', '2', '3', '4']);

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent='space-between' mb={5}>
          <Heading color='gray.200' fontSize='md'>
            Exercícios
          </Heading>

          <Text color='gray.200' fontSize='sm'>
            {exercises.length}
          </Text>
        </HStack>

        <ExerciseCard />  

        <FlatList 
          data={exercises}
          keyExtractor={item => item}
          renderItem={({item}) => (<ExerciseCard />)}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{paddingBottom: 20}}
        />
      </VStack>
    </VStack>
  )
}