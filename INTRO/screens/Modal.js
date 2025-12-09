/**
 * PRÁCTICA: MODAL
 * Esta práctica demuestra el uso del componente Modal para mostrar contenido
 * sobre la pantalla principal. Los modales son útiles para alertas personalizadas,
 * formularios, o cualquier contenido que necesite atención del usuario.
 */

import { Text, View, StyleSheet, Button, Modal } from 'react-native';
import React, { useState } from 'react';

export default function ModalScreen() {

    // Estado que controla si el modal está visible o no
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            {/* Botón para mostrar el modal */}
            <Button title='Mostrar modal' onPress={() => setModalVisible(true)} color='purple'/>
            
            {/* Componente Modal con propiedades importantes: */}
            <Modal 
                animationType='fade' // Tipo de animación: 'fade', 'slide', 'none'
                transparent={true} // Permite ver contenido detrás del modal
                visible={modalVisible} // Controla si el modal se muestra
                onRequestClose={() => setModalVisible(!modalVisible)} // Se ejecuta al presionar botón atrás (Android)
            >
                {/* Contenedor principal del modal con fondo semi-transparente */}
                <View style={styles.modalContainer}>
                    {/* Contenido del modal */}
                    <View style={styles.modalContent}>
                        <Text style={styles.textoModal}>
                            Soy un modal
                        </Text>
                        <Button title='Ocultar modal' onPress={() => setModalVisible(false)} color='purple'></Button>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#434343ff'
    },
    modalContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000ff',
    },
    modalContent:{  
        backgroundColor: '#434343ff',
        padding: 25,
        borderRadius: 15,
        alignItems: 'center',
    },
    textoModal: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
    }
})
