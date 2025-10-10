//1. Imports: zona de imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';

//2. Main: Zona de componentes
export default function ContadorScreen() {

    const [contador, setContador] = useState(0);

    return (
    <View style={styles.container}>

        <Text style={styles.texto}> Contador: </Text>
        <Text style={styles.texto2}> {contador} </Text>

        <View style={styles.botonesContainer}>
            <Button color='#ff0000' title='Agregar' onPress={()=>setContador(contador+1)}/>
            <Button color='#386838ff' title='Restar' onPress={()=>setContador(contador-1)}/>
            <Button color='#0000ff' title='Reiniciar' onPress={()=>setContador(0)}/>
        </View>

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