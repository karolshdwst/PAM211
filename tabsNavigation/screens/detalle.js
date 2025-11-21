import { View, Text, StyleSheet } from 'react-native';

export default function Settings({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>Detalles Usuario</Text>
            <Text style={styles.subtitulo}>Usando Navegacion Stack</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tittle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
    },
    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
        color: 'blue',
    }
});