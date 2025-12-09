/**
 * PRÁCTICA: TEXTINPUT Y ALERT
 * Esta práctica demuestra el uso de TextInput para capturar entrada del usuario
 * y Alert/window.alert para mostrar mensajes. También muestra validación básica
 * de formularios y diferentes tipos de TextInput (normal, password, multilinea).
 */

import {Text, StyleSheet, View, Platform, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';

export default function TxtScreen() {

    // Estados para almacenar los valores de cada campo del formulario
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [comentario, setComentario] = useState('');
    
    // Función para validar y mostrar alerta
    const mostrarAlerta = ()=> {
        // Validamos que los campos no estén vacíos usando trim() para eliminar espacios
        if (nombre.trim() === '' || comentario.trim() === '' || password.trim() === '') {
            // Mostramos alerta de error según la plataforma
            if (Platform.OS === 'web'){
                window.alert ('Error, Porfavor complete todos los campos');
            }else{
                Alert.alert('Error', 'Porfavor complete todos los campos');
            }
        }else{
            // Si los campos están completos, mostramos saludo
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

            {/* TextInput básico para nombre */}
            <TextInput 
                style={style.recuadro} 
                placeholder='Escribe tu nombre' 
                value={nombre} // Valor controlado por el estado
                onChangeText={setNombre} // Actualiza el estado al escribir
                maxLength={50} // Límite de caracteres
            />
            
            {/* TextInput para contraseña con características especiales */}
            <TextInput 
                style={style.recuadro} 
                placeholder='Escribe tu contraseña' 
                value={password} 
                onChangeText={setPassword} 
                secureTextEntry={true} // Oculta el texto (muestra puntos)
                keyboardType='numeric' // Teclado numérico
                maxLength={50}
            />
            
            {/* TextInput multilínea para comentarios largos */}
            <TextInput 
                style={style.recuadroMultilinea} 
                placeholder='Escribe un comentario' 
                value={comentario} 
                onChangeText={setComentario} 
                multiline={true} // Permite múltiples líneas
                numberOfLines={4} // Altura inicial en líneas
                maxLength={200}
            />
            
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
    },
    recuadroMultilinea: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginBottom: 20,
        height: 100,
        textAlignVertical: 'top',
    }
});