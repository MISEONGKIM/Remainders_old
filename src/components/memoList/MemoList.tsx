import React from 'react';
import {SectionList, StyleSheet, Text} from 'react-native';
import {useMemoList} from './useMemoList';

const SectionListBasics = () => {
  const {memoList} = useMemoList();
  return (
    <SectionList
      sections={[{title: '미리 알림', data: memoList}]}
      renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      renderSectionHeader={({section}) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
      keyExtractor={(item, index) => `${index}`}
    />
  );
};

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
});

export default SectionListBasics;
