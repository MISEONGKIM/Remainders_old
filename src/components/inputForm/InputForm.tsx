import React from 'react';
import {Button, SafeAreaView, TextInput, StyleSheet} from 'react-native';
import {useTextInput} from '../memoList/useMemoList';

const InputForm = () => {
  const {onChangeText, text} = useTextInput();
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        // onPress={() =>
        //   // add({text, date: 'date', time: 'time', repeat: 'repeat'})
        // }
        title="+"
        color="#841584"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default InputForm;
