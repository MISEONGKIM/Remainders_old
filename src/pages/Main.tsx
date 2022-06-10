import {SafeAreaView} from 'react-native';
import {MemoList, InputForm} from '../components';
const MainPages = () => {
  return (
    <SafeAreaView>
      <MemoList />
      <InputForm />
    </SafeAreaView>
  );
};

export default MainPages;
