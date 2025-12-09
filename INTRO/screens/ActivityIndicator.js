/**
 * PRÁCTICA: ACTIVITY INDICATOR
 * Esta práctica demuestra el uso de ActivityIndicator para mostrar indicadores de carga
 * y el uso de setTimeout para simular procesos asíncronos (como llamadas a APIs).
 * También muestra cómo usar Platform para comportamientos específicos de cada plataforma.
 */

import { Text, View, StyleSheet, Alert, Platform, ActivityIndicator, Button } from 'react-native'
import { useState } from 'react'

export default function ActivityIndicatorScreen() {

    // Estado que controla si se está mostrando el indicador de carga
    const [cargando, setCargando] = useState(false);
    
    // Función que simula un proceso de carga
    const carga =()=>{
        // Activamos el indicador de carga
        setCargando(true);
        
        // setTimeout simula una operación asíncrona (ej: petición a servidor)
        // Después de 3000ms (3 segundos), ejecuta la función
        setTimeout(() => {
            setCargando(false); // Desactivamos el indicador
            
            // Platform.OS nos permite ejecutar código específico para cada plataforma
            if(Platform.OS === 'web'){
                window.alert('Carga completa'); // Alert de navegador
            }else{
                Alert.alert('Carga completa'); // Alert nativo de React Native
            }
        }, 3000);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Presione para iniciar la carga</Text>
            <View style={styles.botonesContainer}>
                {/* Renderizado condicional: si está cargando muestra el spinner, si no, el botón */}
                {/* ActivityIndicator es el componente de React Native para mostrar spinners de carga */}
                {cargando ? 
                    (<ActivityIndicator size='large' color='red'></ActivityIndicator>)
                    :(<Button color={'brown'} title='Presione para iniciar' onPress={carga}></Button>)
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FFFF',
        alignItems:'center',
        justifyContent: 'center'
    },
    texto:{
        color: '#00000',
        fontSize: 30,
        fontFamily: 'Times New Roman',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    botonesContainer:{
        marginTop: 20,
        gap: 20,
    }
})
