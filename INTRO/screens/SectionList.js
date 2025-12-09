/**
 * PRÁCTICA: SECTIONLIST BÁSICA
 * Ejemplo simple de SectionList que muestra una lista de alimentos
 * organizados por categorías (Frutas, Verduras, Carnes).
 * SectionList es ideal para listas agrupadas como contactos alfabéticos,
 * categorías de productos, etc.
 */

import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';

const SectionListExample = () => {
  // Estructura de datos para SectionList: array de objetos con title y data
  const DATA = [
    {
      title: 'Frutas', // Título de la sección
      data: ['Manzana', 'Banana', 'Naranja'], // Array de elementos de la sección
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
        sections={DATA} // Array de secciones
        keyExtractor={(item, index) => item + index} // Genera key única para cada elemento
        // Renderiza cada elemento individual
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        // Renderiza el encabezado de cada sección
        // Desestructuramos title del objeto section
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
