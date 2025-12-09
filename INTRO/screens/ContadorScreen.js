/**
 * PRÁCTICA: CONTADOR
 * Esta práctica demuestra el uso de hooks (useState) para manejar el estado
 * y crear un contador interactivo con botones para incrementar, decrementar y reiniciar.
 */

//1. Imports: zona de imports
// Importamos StatusBar de expo para controlar la barra de estado del dispositivo
import { StatusBar } from 'expo-status-bar';
// Importamos componentes básicos de React Native para la interfaz
import { StyleSheet, Text, View, Button} from 'react-native';
// Importamos React y el hook useState para manejar el estado del componente
import React, {useState} from 'react';

//2. Main: Zona de componentes
// Componente principal que exportamos por defecto
export default function ContadorScreen() {

    // Estado del contador: useState(0) inicializa el contador en 0
    // setContador es la función que usamos para actualizar el valor del contador
    const [contador, setContador] = useState(0);

    // Renderizamos la interfaz del contador
    return (
    <View style={styles.container}>
        {/* Etiqueta que indica qué muestra el componente */}
        <Text style={styles.texto}> Contador: </Text>
        
        {/* Mostramos el valor actual del contador usando llaves {} para insertar JavaScript */}
        <Text style={styles.texto2}> {contador} </Text>

        {/* Contenedor para los botones con estilo horizontal */}
        <View style={styles.botonesContainer}>
            {/* Botón rojo para incrementar: onPress ejecuta una función que suma 1 al contador */}
            <Button color='#ff0000' title='Agregar' onPress={()=>setContador(contador+1)}/>
            
            {/* Botón verde para decrementar: resta 1 al contador */}
            <Button color='#386838ff' title='Restar' onPress={()=>setContador(contador-1)}/>
            
            {/* Botón azul para reiniciar: establece el contador a 0 */}
            <Button color='#0000ff' title='Reiniciar' onPress={()=>setContador(0)}/>
        </View>

        {/* StatusBar controla la apariencia de la barra de estado del dispositivo */}
        <StatusBar style="auto" />
    </View>
    );
}
//3. Styles: Zona de estilos
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#ffebc1ff',
    alignItems: 'center', //esto chambea en el eje x
    justifyContent: 'center', //esto chambea en el eje y
    },
    texto:{
        color:'purple',
        fontSize:30,
        fontFamily:'Times New Roman',
        fontWeight:'bold',
        fontStyle:'italic',
        textDecorationLine:'line-through'
    },
    texto2:{
        color:'#ff0000ff',
        fontSize:40,
        fontFamily:'Courier',
        fontWeight:'900',
        fontStyle:'italic',
        textDecorationLine:'underline'
    },
    botonesContainer:{
        marginTop:20,
        flexDirection:'row', //esto hace que los botones se pongan en línea horizontal
        gap:20, //esto agrega un espacio entre los botones
        
    },
});