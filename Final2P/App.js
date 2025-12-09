import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useCallback } from 'react';
import { Dimensions, StyleSheet, Text, View,  ImageBackground, FlatList, Platform, Button, Alert} from 'react-native';
import { ScrollView } from 'react-native-web';
import * as SplashScreen from 'expo-splash-screen';


const BackgroundImage = require('../Final2P/assets/fondoFinal.jpg');


const platillos = [
  {id: '1', nombre: 'Gorditas', tiempoPreparacion: '5 minutos', descripcion: 'Gorditas de mijagas con queso', recetaCompleta: 'Queso fundido, migajas, '},
  {id: '2', nombre: 'Tacos al pastor', tiempoPreparacion: '15 minutos', descripcion: 'Tacos de cerdo marinado con achiote', recetaCompleta: 'Carne de cerdo, achiote, tortillas, piña, cilantro, cebolla'},
  {id: '3', nombre: 'Enchiladas suizas', tiempoPreparacion: '25 minutos', descripcion: 'Tortillas de maíz bañadas en salsa verde', recetaCompleta: 'Tortillas, pollo, salsa verde, queso manchego, crema'},
  {id: '4', nombre: 'Pozole rojo', tiempoPreparacion: '2 horas', descripcion: 'Caldo de granos de maíz con carne de cerdo', recetaCompleta: 'Maíz pozolero, carne de cerdo, chile guajillo, lechuga, rábano'},
  {id: '5', nombre: 'Chiles en nogada', tiempoPreparacion: '1.5 horas', descripcion: 'Chiles poblanos rellenos de picadillo', recetaCompleta: 'Chiles poblanos, carne molida, frutas, nuez de castilla, granada'},
  {id: '6', nombre: 'Mole poblano', tiempoPreparacion: '4 horas', descripcion: 'Platillo complejo con salsa de chiles y chocolate', recetaCompleta: 'Pollo, chiles anchos, chiles mulatos, chocolate, especias'}
]

const MostrarReceta = (item) => {
  window.alert(
    `Receta de ${item.nombre} - ${item.recetaCompleta}`,
    item.recetaCompleta,
    [{ text: "Cerrar" }]
  );
}

const renderItemm = ({ item }) => (
  <View>
    <View style={styles.item}>
      <Text style={styles.nombre}>{item.nombre}</Text>
      <Text style={styles.tiempoPreparacion}>{item.tiempoPreparacion}</Text>
      <Text style={styles.descripcion}>{item.descripcion}</Text>
      <Button color='green' title='Ver receta completa' onPress={() => MostrarReceta(item)} />
    </View>
  </View>
)


export default function App() {
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);


  return (
    <ImageBackground
      source={BackgroundImage}
      style={styles.mainScreen}
      resizeMode='center'
      onLayout={onLayoutRootView}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Mis recetas</Text>
        <ScrollView>
          <FlatList
            data={platillos}
            renderItem={renderItemm}
            keyExtractor={item => item.id}
          />
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  mainScreen: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
  text: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: '4px',
    padding: '5px'
  },
  item: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 5,
    },
    nombre: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    tiempoPreparacion: {
      fontSize: 15,
      color: '#666'
    },
    descripcion: {
        fontSize: 14,
        color: '#666',
    },

});