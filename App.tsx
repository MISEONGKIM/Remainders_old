import React from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';
import MainPages from './src/pages/Main';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <MainPages />
    </SafeAreaView>
  );
};

export default App;
