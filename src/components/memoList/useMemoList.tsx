import {useState} from 'react';
const useMemoList = () => {
  const [memoList, setMemoList] = useState([]);
  const add = item => {
    setMemoList([...memoList, item]);
  };
  return {memoList, add};
};
const useTextInput = () => {
  const [text, setText] = useState('');

  return {text, onChangeText: setText};
};

export {useMemoList, useTextInput};
