import React from 'react'
import { Text, View, StyleSheet, TextInput, Switch, Button, Alert, TouchableOpacity } from 'react-native'

export default function PracticaDeRepaso() {
    const [prendido, setPrendido] = React.useState(false);
    const [nombre, setNombre] = React.useState('');
    const [correo, setCorreo] = React.useState('');

    const validarEmail = (email) => {
        const validCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return validCorreo.test(String(email).toLowerCase());
    }

    const handleRegister = () => {
        console.log('Botón presionado');
        if (!nombre.trim() || !correo.trim() || !validarEmail(correo)) {
            Alert.alert('Error', 'Error campos no completados');
            return;
        }
        if (!prendido) {
            Alert.alert('Aviso', 'Términos no aceptados');
            return;
        }
        Alert.alert('Éxito', 'Registrado exitosamente');
    }

    return (
        <View style={styles.container}>

            <View style={styles.form}>
                <Text style={styles.title}>Registro de usuario</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Nombre'
                    placeholderTextColor='#eee'
                    value={nombre}
                    onChangeText={setNombre}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Correo electrónico'
                    placeholderTextColor='#eee'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    value={correo}
                    onChangeText={setCorreo}
                />

                <View style={styles.switchContainer}>
                    <Text style={styles.switchText}>Aceptar términos y condiciones</Text>
                    <Switch value={prendido} onValueChange={setPrendido}/>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
    form: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#6c6c6cff',
        borderRadius: 8,
        padding: 16,
        elevation: 2,

        color: '#fff'
    },
    title: { 
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#fff' },
    input: { borderWidth: 1, 
        borderColor: '#ccc', 
        borderRadius: 6, 
        padding: 10, 
        marginBottom: 12, 
        color: '#fff' },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    switchText: { color: '#fff' },
    button: {
        marginTop: 16,
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})
