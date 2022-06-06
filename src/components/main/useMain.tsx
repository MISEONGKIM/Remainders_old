import {useState} from 'react';

const useTextInput = () => {
  const [text, setText] = useState('');

  return {text, onChangeText: setText};
};

const useAddButton = () => {
  const onPressButton = () => {};
  return {onPressButton};
};

export {useTextInput, useAddButton};
