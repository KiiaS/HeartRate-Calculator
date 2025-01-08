import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

/*This is just for a text, what happens if i make changes*/

export default function App() {
  const [age, setAge] = useState('')
  const [lower, setLower] = useState(0)
  const [upper, setUpper] = useState(0)

  //Const to calculate the heart rate limits
  const calculate = () => {
    const lower = (220 - age) * 0.65
    const upper = (220 - age) * 0.85

    setLower(lower)
    setUpper(upper)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType='decimal-pad'
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{lower.toFixed()}-{upper.toFixed()}</Text>
      <Button title="CALCULATE" onPress={calculate}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10
  },
  field: {
    marginBottom: 10
  }
});
