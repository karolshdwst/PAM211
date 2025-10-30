import { Text, View, StyleSheet, Alert, Platform, ActivityIndicator, Button } from 'react-native'
import { useState } from 'react'

// Renombrado a ActivityIndicatorScreen para evitar conflicto con el import ActivityIndicator
export default function ActivityIndicatorScreen() {

    const [cargando, setCargando] = useState(false);
    const carga =()=>{
        setCargando(true);
        setTimeout(() => {
            setCargando(false);
            if(Platform.OS === 'web'){
                window.alert('Carga completa');
            }else{
                Alert.alert('Carga completa');
            }
        }, 3000);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Presione para iniciar la carga</Text>
            <View style={styles.botonesContainer}>
                {cargando ? (<ActivityIndicator size='large' color='red'></ActivityIndicator>):(<Button color={'brown'} title='Presione para iniciar' onPress={carga}></Button>)}
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
