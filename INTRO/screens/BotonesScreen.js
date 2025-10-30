import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Switch} from 'react-native'

export default function BotonesScreen() {
    const [prendido, setPrendido] = useState(false);
    const backgroundColor = prendido ? '#F5F5F5' : '#121212';
    const textoColor = prendido ? '#000' : '#FFF';

    return (
        <View style={[styles.container, {backgroundColor}]}>
            <Text style={[styles.text, {color: textoColor}]}>Estado: {prendido ? "Prendido" : "Apagado"}</Text>
            
            <TouchableOpacity style={styles.botonEncender} onPress={() => setPrendido(true)}>
                <Text style={styles.textBoton}>Encender</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonApagar} onPress={() => setPrendido(false)}>
                <Text style={styles.textBoton}>Apagar</Text>
            </TouchableOpacity>

            <View style={styles.switchContainer}>
                <Text style={[styles.switchLabel, {color: textoColor}]}>Controles Switch: </Text>
                <Switch value={prendido} onValueChange={setPrendido} />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b4b4b4ff',
    },
    text : {
        fontSize: 20,
        marginBottom: 30,
        fontWeight: 'bold',
    },
    botonEncender: {
        backgroundColor: '#4CAF50',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        width: 150,
        alignItems: 'center',
    },
    botonApagar: {
        backgroundColor: '#ff0000',
        padding: 10,
        borderRadius: 5,
        width: 150,
        alignItems: 'center',
    },
    textBoton: {
        color: '#ffffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    switchLabel: {
        fontSize: 16,
        marginRight: 10,
    }
})