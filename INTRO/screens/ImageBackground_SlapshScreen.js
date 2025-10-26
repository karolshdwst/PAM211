import { Text, View, StyleSheet, Image, ImageBackground, Dimensions} from 'react-native'
import React, {useState, useEffect} from 'react'

const BackgroundImage = require('../assets/splash-icon.png');
const CachiImage = require('../assets/cachi2.jpeg');


export default function ImageBackground_SplashScreen({navigation}) {
    const {width, height} = Dimensions.get('window');
    const [showSplash, setShowSplash] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    
    if(showSplash) {
        return (
            <ImageBackground 
            source={BackgroundImage} 
            style={styles.background}
            resizeMode='cover'
            >
                <View style={styles.overlay}>
                    <Text style={styles.title}>Bienvenido</Text>
                    <Text style={styles.title}>Cargando</Text>
                </View>
            </ImageBackground>
        );
    }
    
    return(
        <ImageBackground 
            source={CachiImage} 
            style={styles.mainScreen}
            resizeMode='center'
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