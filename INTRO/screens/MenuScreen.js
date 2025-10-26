import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import BotonesScreen from './BotonesScreen';
import ContadorScreen from './ContadorScreen';
import TextInput_Alert from './TextInput_Alert';
import ImageBackground_SlapshScreen from './ImageBackground_SlapshScreen';
import ScrollView from './ScrollView';
import ActivityIndicator from './ActivityIndicator';
import FlatList_SectionList from './FlatList';
import Modal from './Modal';
import PracticaDeRepaso from './PracticaDeRepaso';

export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen></ContadorScreen>
        case 'botones':
            return <BotonesScreen></BotonesScreen>
        case 'textinput':
            return <TextInput_Alert></TextInput_Alert>
        case 'imagebackground':
            return <ImageBackground_SlapshScreen></ImageBackground_SlapshScreen>
        case 'scrollview':
            return <ScrollView></ScrollView>
        case 'activityindicator':
            return <ActivityIndicator></ActivityIndicator>
        case 'flatlist':
            return <FlatList_SectionList></FlatList_SectionList>
        case 'modal':
            return <Modal></Modal>
        case 'PracticaDeRepaso':
            return <PracticaDeRepaso></PracticaDeRepaso>
        case 'menu':
            default:
            return (
                <View style={styles.container}>
                    <Text>Menú de prácticas</Text>
                    <View style={styles.botonesContainer}>
                        <Button onPress={() => setScreen('contador')} title='Practica Contador'></Button>
                        <Button onPress={() => setScreen('botones')} title='Practica Botones'></Button>
                        <Button onPress={() => setScreen('textinput')} title='Practica TextInput & Alert'></Button>
                        <Button onPress={() => setScreen('imagebackground')} title='Practica ImageBackground & SplashScreen'></Button>
                        <Button onPress={() => setScreen('scrollview')} title='Practica ScrollView'></Button>
                        <Button onPress={() => setScreen('activityindicator')} title='Practica ActivityIndicator'></Button>
                        <Button onPress={() => setScreen('flatlist')} title='Practica FlatList & SectionList'></Button>
                        <Button onPress={() => setScreen('modal')} title='Practica Modal'></Button>
                        <Button onPress={() => setScreen('PracticaDeRepaso')} title='Practica de Repaso'></Button>
                    </View>
                </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20

    },
    button: {
        marginTop: 20
    },
    botonesContainer:{
        marginTop:20,
        gap:20, //esto agrega un espacio entre los botones
        
    },
})