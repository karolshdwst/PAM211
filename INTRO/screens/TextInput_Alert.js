//input de contraseña y comentario

import {Text, StyleSheet, View, Platform, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';

export default function TxtScreen() {1

    const [nombre, setNombre] = useState('');
    const mostrarAlerta = ()=> {
        if (nombre.trim() === '') {
            if (Platform.OS === 'web'){
                window.alert ('Error, porfavor ingrese su nombre');
            }else{
                Alert.alert('Error', 'Porfavor ingrese su nombre');
            }
        }else{
            if(Platform.OS === 'web'){
                window.alert('Hola ' + nombre);
            }else{
                Alert.alert('Hola', nombre);
            }
        }
    };

    return (
        <View style={style.container}>
            <Text style={style.titulo}>Ejemplo de TextInput y Alert</Text>
            <TextInput style={style.recuadro} placeholder='Escribe tu nombre' value={nombre} onChangeText={setNombre} maxLength={50}/>
            <Button color='blue' title='Mostrar saludo' onPress={mostrarAlerta}/>
        </View>
    );
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cfcfcfff',
        padding: 20,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    recuadro: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginBottom: 20,
    }
});