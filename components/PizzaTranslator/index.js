import { useState, useEffect } from 'react';
import { Text, TextInput, View } from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    setTranslated(text.split(' ').map(word => word + '🍕').join(' '))
    console.log(translated)
  }, [text])


  const checkText = (t) => {
    if(/^[a-zA-Z]$/g.test(t)) setText(t)
  }
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={t => checkText(t)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {translated}
      </Text>
    </View>
  )
}


export default PizzaTranslator;
