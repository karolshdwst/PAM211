/**
 * PRÁCTICA: IMAGEBACKGROUND Y SPLASHSCREEN
 * Esta práctica demuestra:
 * - ImageBackground: componente para usar imágenes como fondo
 * - SplashScreen simulado: pantalla de bienvenida temporal
 * - useEffect: hook para efectos secundarios y temporizadores
 * - Dimensions: obtener dimensiones de la pantalla
 */

import { Text, View, StyleSheet, Image, ImageBackground, Dimensions} from 'react-native'
import React, {useState, useEffect} from 'react'

// Importamos las imágenes usando require() para recursos locales
const BackgroundImage = require('../assets/splash-icon.png');
const CachiImage = require('../assets/cachi2.jpeg');


export default function ImageBackground_SplashScreen({navigation}) {
    // Dimensions.get('window') obtiene el ancho y alto de la pantalla
    const {width, height} = Dimensions.get('window');
    
    // Estado que controla si se muestra el splash screen
    const [showSplash, setShowSplash] = useState(true);
    
    // useEffect se ejecuta después del primer render
    useEffect(() => {
        // setTimeout crea un temporizador
        const timer = setTimeout(() => {
            setShowSplash(false); // Ocultamos splash después de 3 segundos
        }, 3000);
        
        // Función de limpieza: se ejecuta cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, []); // Array vacío [] significa que solo se ejecuta una vez
    
    // Renderizado condicional: si showSplash es true, muestra splash screen
    if(showSplash) {
        return (
            // ImageBackground funciona como View pero con una imagen de fondo
            <ImageBackground 
                source={BackgroundImage} // Fuente de la imagen
                style={styles.background}
                resizeMode='cover' // Cómo ajustar la imagen: 'cover', 'contain', 'stretch', 'center'
            >
                {/* Overlay: capa semi-transparente sobre la imagen */}
                <View style={styles.overlay}>
                    <Text style={styles.title}>Bienvenido</Text>
                    <Text style={styles.title}>Cargando</Text>
                </View>
            </ImageBackground>
        );
    }
    
    // Si showSplash es false, muestra la pantalla principal
    return(
        <ImageBackground 
            source={CachiImage} 
            style={styles.mainScreen}
            resizeMode='center' // Imagen centrada sin escalar
        >
            <View style={styles.mainOverlay}>
                <Text style={styles.mainText}>Bienvenido a la pantalla principal</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(131, 131, 131, 0.5)',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    cachiImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
        borderRadius: 75,
    },
    mainScreen: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    mainOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    mainText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    }
})