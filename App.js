// import React from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import PizzaTranslator from './components/PizzaTranslator';

export default function App() {
  return (
    <ScrollView>
      <Text>Hello World</Text>
      <View>
        <Text>Hello!</Text>
        <Image
          source={{uri: 'https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg', }}
          style={{width: 200, height: 200}}
        />
      </View>
      <PizzaTranslator />
    </ScrollView>
  );
}
