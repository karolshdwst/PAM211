import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, ImageBackground, FlatList } from 'react-native';
import React, {useState, useEffect} from 'react'
import { Button } from 'react-native-web';

const BackgroundImage = require('./assets/westernBacon.jpg')



export default function App() {

  const platosPrincipales = [
    {id: '1', nombre: 'Western Bacon', descripcion: 'La mejor burger', precio: '$200',},
    {id: '2', nombre: 'Western Bacon', descripcion: 'La mejor burger', precio: '$200',},
    {id: '3', nombre: 'Western Bacon', descripcion: 'La mejor burger', precio: '$200',},
    {id: '4', nombre: 'Western Bacon', descripcion: 'La mejor burger', precio: '$200',},
    {id: '5', nombre: 'Western Bacon', descripcion: 'La mejor burger', precio: '$200',}
  ]

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.titulo}>{item.nombre}</Text>
      <Text style={styles.descripcion}>{item.descripcion}</Text>
      <Text style={styles.precio}>{item.precio}</Text>
      <Button>Picale we a ver que pasa</Button>
    </View>
  )

  return (
    <ImageBackground
      source={BackgroundImage}
      style={styles.background}
      resizeMode='cover'
    >
      <View style={styles.ViewTituloDescripcion}>
          <Text style={styles.mainText}>
            Bienvenido al restaurande Cardenales UPQ
          </Text>
          <br/>
          <Text style={styles.descripcionText}>
            El mejor restaurante de toda la UPQ
          </Text>
        </View>
        <br/>
      <ScrollView>
        <View>
          <Text style={styles.subtitulo}>
            Platillos/Bebidas:
          </Text>
          <FlatList>
            
          </FlatList>
        </View>
      </ScrollView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ViewTituloDescripcion: {
        flex: 1,
        padding: '15px',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    mainText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000ff',
        backgroundColor: '#ffffffff',
        borderRadius: '5px'
    },
    descripcionText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000ff',
        backgroundColor: '#ffffffff',
        borderRadius: '5px'
    },
    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffffff',
        backgroundColor: '#000000ff',
        borderRadius: '5px'
    }
});
