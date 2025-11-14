import { Text, View, StyleSheet, Button, Modal } from 'react-native';
import React, { useState } from 'react';

export default function ModalScreen() {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Button title='Mostrar modal' onPress={() => setModalVisible(true)} color='purple'/>
            
            <Modal animationType='fade' transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                <View style={styles.modalContainer}>
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
