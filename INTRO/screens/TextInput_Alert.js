// Importación de componentes necesarios de React Native
import {Text, StyleSheet, View, Platform, TextInput, Button, Alert} from 'react-native';
// Importación de React y el hook useState para manejar estados
import React, {useState} from 'react';

// Componente principal de la pantalla
export default function TextInput_Alert() {

    // Estado para almacenar el nombre del usuario
    const [nombre, setNombre] = useState('');
    // Estado para almacenar la contraseña (solo números)
    const [password, setPassword] = useState('');
    // Estado para almacenar el comentario multilínea
    const [comentario, setComentario] = useState('');
    
    // Función que muestra una alerta al presionar el botón
    const mostrarAlerta = ()=> {
        // Validación: verifica que todos los campos estén completos
        if (nombre.trim() === '' || comentario.trim() === '' || password.trim() === '') {
            // Si algún campo está vacío, muestra error según la plataforma
            if (Platform.OS === 'web'){
                // Alerta para plataforma web
                window.alert ('Error, Porfavor complete todos los campos');
            }else{
                // Alerta para iOS/Android
                Alert.alert('Error', 'Porfavor complete todos los campos');
            }
        }else{
            // Si todos los campos están completos, muestra saludo
            if(Platform.OS === 'web'){
                // Saludo para plataforma web
                window.alert('Hola ' + nombre);
            }else{
                // Saludo para iOS/Android
                Alert.alert('Hola', nombre);
            }
        }
    };

    // Renderizado de la interfaz
    return (
        <View style={style.container}>
            {/* Título de la pantalla */}
            <Text style={style.titulo}>Ejemplo de TextInput y Alert</Text>

            {/* Input para el nombre del usuario */}
            <TextInput style={style.recuadro} placeholder='Escribe tu nombre' value={nombre} onChangeText={setNombre} maxLength={50}/>
            
            {/* Input para contraseña numérica (texto oculto) */}
            <TextInput style={style.recuadro} placeholder='Escribe tu contraseña' value={password} onChangeText={setPassword} secureTextEntry={true} keyboardType='numeric' maxLength={50}/>
            
            {/* Input multilínea para comentarios */}
            <TextInput style={style.recuadroMultilinea} placeholder='Escribe un comentario' value={comentario} onChangeText={setComentario} multiline={true} numberOfLines={4} maxLength={200}/>
            
            {/* Botón que ejecuta la función mostrarAlerta */}
            <Button color='blue' title='Mostrar saludo' onPress={mostrarAlerta}/>
        </View>
    );
}
// Estilos del componente
const style = StyleSheet.create({
    // Contenedor principal con diseño centrado
    container: {
        flex: 1, // Ocupa todo el espacio disponible
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center', // Centra horizontalmente
        backgroundColor: '#cfcfcfff', // Color de fondo gris claro
        padding: 20, // Espaciado interno
    },
    // Estilo del título
    titulo: {
        fontSize: 22, // Tamaño de fuente
        fontWeight: 'bold', // Texto en negrita
        marginBottom: 15, // Margen inferior
    },
    // Estilo para inputs de una sola línea (nombre y contraseña)
    recuadro: {
        borderWidth: 1, // Grosor del borde
        borderColor: '#000', // Color del borde negro
        padding: 10, // Espaciado interno
        marginBottom: 20, // Margen inferior
    },
    // Estilo para input multilínea (comentario)
    recuadroMultilinea: {
        borderWidth: 1, // Grosor del borde
        borderColor: '#000', // Color del borde negro
        padding: 10, // Espaciado interno
        marginBottom: 20, // Margen inferior
        height: 100, // Altura fija del campo
        textAlignVertical: 'top', // Alinea el texto desde arriba
    }
});