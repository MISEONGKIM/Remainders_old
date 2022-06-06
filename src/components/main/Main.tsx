import React from 'react';
import {
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from 'react-native';
import {useTextInput, useAddButton} from './useMain';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const SectionListBasics = () => {
  const {onChangeText, text} = useTextInput();
  const {onPressButton} = useAddButton();
  return (
    <SafeAreaView>
      <SectionList
        sections={[{title: '미리 알림', data: []}]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button onPress={onPressButton} title="+" color="#841584" />
    </SafeAreaView>
  );
};

export default SectionListBasics;
