/**
 * PRÁCTICA: BOTONES Y SWITCH
 * Esta práctica demuestra el uso de diferentes tipos de botones y controles:
 * - TouchableOpacity: botones personalizables con efectos táctiles
 * - Switch: interruptor on/off para alternar estados
 * - Cambio dinámico de estilos según el estado (tema claro/oscuro)
 */

import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Switch} from 'react-native'

export default function BotonesScreen() {
    // Estado booleano que controla si está prendido (true) o apagado (false)
    const [prendido, setPrendido] = useState(false);
    
    // Color de fondo dinámico: claro cuando está prendido, oscuro cuando está apagado
    // Usamos el operador ternario: condición ? valorSiTrue : valorSiFalse
    const backgroundColor = prendido ? '#F5F5F5' : '#121212';
    
    // Color del texto: negro cuando está prendido, blanco cuando está apagado
    const textoColor = prendido ? '#000' : '#FFF';

    return (
        // Aplicamos estilos dinámicos usando array: [estilo fijo, estilo dinámico]
        <View style={[styles.container, {backgroundColor}]}>
            {/* Mostramos el estado actual usando un operador ternario */}
            <Text style={[styles.text, {color: textoColor}]}>Estado: {prendido ? "Prendido" : "Apagado"}</Text>
            
            {/* TouchableOpacity es un botón personalizable con efecto de opacidad al presionar */}
            <TouchableOpacity style={styles.botonEncender} onPress={() => setPrendido(true)}>
                <Text style={styles.textBoton}>Encender</Text>
            </TouchableOpacity>

            {/* Botón para apagar: establece prendido en false */}
            <TouchableOpacity style={styles.botonApagar} onPress={() => setPrendido(false)}>
                <Text style={styles.textBoton}>Apagar</Text>
            </TouchableOpacity>

            {/* Switch: control de interruptor nativo que alterna el estado */}
            <View style={styles.switchContainer}>
                <Text style={[styles.switchLabel, {color: textoColor}]}>Controles Switch: </Text>
                {/* value: valor actual, onValueChange: función que se ejecuta al cambiar */}
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