import React from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';
import Main from './src/components/main/Main';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <Main />
    </SafeAreaView>
  );
};

export default App;
