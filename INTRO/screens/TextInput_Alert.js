import {Text, StyleSheet, View, Platform, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';

export default function TxtScreen() {

    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [comentario, setComentario] = useState('');
    
    const mostrarAlerta = ()=> {
        if (nombre.trim() === '' || comentario.trim() === '' || password.trim() === '') {
            if (Platform.OS === 'web'){
                window.alert ('Error, Porfavor complete todos los campos');
            }else{
                Alert.alert('Error', 'Porfavor complete todos los campos');
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
            
            <TextInput style={style.recuadro} placeholder='Escribe tu contraseña' value={password} onChangeText={setPassword} secureTextEntry={true} keyboardType='numeric' maxLength={50}/>
            
            <TextInput style={style.recuadroMultilinea} placeholder='Escribe un comentario' value={comentario} onChangeText={setComentario} multiline={true} numberOfLines={4} maxLength={200}/>
            
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