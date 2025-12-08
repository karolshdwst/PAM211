import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';

const SectionListExample = () => {
  const DATA = [
    {
      title: 'Frutas',
      data: ['Manzana', 'Banana', 'Naranja'],
    },
    {
      title: 'Verduras',
      data: ['Lechuga', 'Tomate', 'Zanahoria'],
    },
    {
      title: 'Carnes',
      data: ['Pollo', 'Res', 'Pescado'],
    },
  ];

  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default SectionListExample;
