/**
 * PRÁCTICA: SCROLLVIEW
 * Esta práctica demuestra el uso de ScrollView para crear contenido desplazable.
 * ScrollView es útil cuando tienes contenido que excede el tamaño de la pantalla.
 * Nota: Para listas largas es mejor usar FlatList por rendimiento.
 */

import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'

export default function ScrollViewScreen(){
        return (
            <View style={styles.container}>
                {/* ScrollView permite desplazamiento vertical u horizontal */}
                <ScrollView 
                    style={styles.scrollArea} // Estilo del contenedor scroll
                    contentContainerStyle={styles.scrollContent} // Estilo del contenido interno
                    showsVerticalScrollIndicator={true} // Muestra la barra de desplazamiento
                >
                    
                    <Text style={styles.title}>Lorem</Text>
                    <Text style={styles.item}>Aquí va a ir el lorem papus</Text>
                    <Text style={styles.textRed}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem eum ea corrupti dolorum, a esse quis exercitationem rem vitae aut laborum incidunt enim maxime dolor fugit dolorem totam inventore minus iure adipisci aliquid eveniet facilis. Perferendis, illo nobis! Eaque corrupti in magnam molestiae, ut doloribus pariatur, iure sunt sit cumque veniam nemo consequuntur. Error quos ratione ea placeat laboriosam. Eligendi nisi aut harum deserunt. </Text>

                    <Text style={styles.title}>Lorem</Text>
                    <Text style={styles.item}>Aquí va a ir el lorem papus</Text>
                    <Text style={styles.textRed}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem eum ea corrupti dolorum, a esse quis exercitationem rem vitae aut laborum incidunt enim maxime dolor fugit dolorem totam inventore minus iure adipisci aliquid eveniet facilis. Perferendis, illo nobis! Eaque corrupti in magnam molestiae, ut doloribus pariatur, iure sunt sit cumque veniam nemo consequuntur. Error quos ratione ea placeat laboriosam. Eligendi nisi aut harum deserunt. </Text>

                    <Text style={styles.title}>Lorem</Text>
                    <Text style={styles.item}>Aquí va a ir el lorem papus</Text>
                    <Text style={styles.textRed}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem eum ea corrupti dolorum, a esse quis exercitationem rem vitae aut laborum incidunt enim maxime dolor fugit dolorem totam inventore minus iure adipisci aliquid eveniet facilis. Perferendis, illo nobis! Eaque corrupti in magnam molestiae, ut doloribus pariatur, iure sunt sit cumque veniam nemo consequuntur. Error quos ratione ea placeat laboriosam. Eligendi nisi aut harum deserunt. </Text>

                    <Text style={styles.title}>Lorem</Text>
                    <Text style={styles.item}>Aquí va a ir el lorem papus</Text>
                    <Text style={styles.textRed}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem eum ea corrupti dolorum, a esse quis exercitationem rem vitae aut laborum incidunt enim maxime dolor fugit dolorem totam inventore minus iure adipisci aliquid eveniet facilis. Perferendis, illo nobis! Eaque corrupti in magnam molestiae, ut doloribus pariatur, iure sunt sit cumque veniam nemo consequuntur. Error quos ratione ea placeat laboriosam. Eligendi nisi aut harum deserunt. </Text>
                    <Text style={styles.title}>Lorem</Text>
                    <Text style={styles.item}>Aquí va a ir el lorem papus</Text>
                    <Text style={styles.textRed}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem eum ea corrupti dolorum, a esse quis exercitationem rem vitae aut laborum incidunt enim maxime dolor fugit dolorem totam inventore minus iure adipisci aliquid eveniet facilis. Perferendis, illo nobis! Eaque corrupti in magnam molestiae, ut doloribus pariatur, iure sunt sit cumque veniam nemo consequuntur. Error quos ratione ea placeat laboriosam. Eligendi nisi aut harum deserunt. </Text>

                    <Text style={styles.title}>Lorem</Text>
                    <Text style={styles.item}>Aquí va a ir el lorem papus</Text>
                    <Text style={styles.textRed}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem eum ea corrupti dolorum, a esse quis exercitationem rem vitae aut laborum incidunt enim maxime dolor fugit dolorem totam inventore minus iure adipisci aliquid eveniet facilis. Perferendis, illo nobis! Eaque corrupti in magnam molestiae, ut doloribus pariatur, iure sunt sit cumque veniam nemo consequuntur. Error quos ratione ea placeat laboriosam. Eligendi nisi aut harum deserunt. </Text>

                    <Text style={styles.title}>Lorem</Text>
                    <Text style={styles.item}>Aquí va a ir el lorem papus</Text>
                    <Text style={styles.textRed}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem eum ea corrupti dolorum, a esse quis exercitationem rem vitae aut laborum incidunt enim maxime dolor fugit dolorem totam inventore minus iure adipisci aliquid eveniet facilis. Perferendis, illo nobis! Eaque corrupti in magnam molestiae, ut doloribus pariatur, iure sunt sit cumque veniam nemo consequuntur. Error quos ratione ea placeat laboriosam. Eligendi nisi aut harum deserunt. </Text>

                    <Text style={styles.title}>Lorem</Text>
                    <Text style={styles.item}>Aquí va a ir el lorem papus</Text>
                    <Text style={styles.textRed}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem eum ea corrupti dolorum, a esse quis exercitationem rem vitae aut laborum incidunt enim maxime dolor fugit dolorem totam inventore minus iure adipisci aliquid eveniet facilis. Perferendis, illo nobis! Eaque corrupti in magnam molestiae, ut doloribus pariatur, iure sunt sit cumque veniam nemo consequuntur. Error quos ratione ea placeat laboriosam. Eligendi nisi aut harum deserunt. </Text>

                    <Text style={styles.title}>Lorem</Text>
                    <Text style={styles.item}>Aquí va a ir el lorem papus</Text>
                    <Text style={styles.textRed}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem eum ea corrupti dolorum, a esse quis exercitationem rem vitae aut laborum incidunt enim maxime dolor fugit dolorem totam inventore minus iure adipisci aliquid eveniet facilis. Perferendis, illo nobis! Eaque corrupti in magnam molestiae, ut doloribus pariatur, iure sunt sit cumque veniam nemo consequuntur. Error quos ratione ea placeat laboriosam. Eligendi nisi aut harum deserunt. </Text>
                </ScrollView>
            </View>
        )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a0a0a0ff',
    },
    scrollArea: {
        flex: 1
    },
    scrollContent: {
        alignItems: 'center',
    },
    item: {
        backgroundColor: '#ff0000ff',
        color: '#ffffffff',
        marginVertical: 8,
        padding: 12,
        borderRadius: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFD700',
        textAlign: 'center',
        marginBottom: 20
    },
    subtitleRed: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#ff0000ff',
        borderRadius: 10,
        marginVertical: 12,
        paddingVertical: 12,
        paddingHorizontal: 10,
        width: '95%',
        alignSelf: 'center'
    },
    text: {
        fontSize: 16,
        color: '#ffffffff',
        textAlign: 'center',
        marginBottom: 20,
        padding: 10,
        lineHeight: 24,
    },
    textRed: {
        fontSize: 16,
        color: '#ffffffff',
        lineHeight: 24,
        textAlign: 'justify',
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#FF0000',
        borderRadius: 10,
    }
})