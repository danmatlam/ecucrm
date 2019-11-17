import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { palette } from '../theme';

const ErrorComponent = ({ mensaje, descripcion }) => {
    return (
        <View style={styles.container}>
            <View style={styles.cajita}>
                <Text style={styles.title}>
                    {mensaje}
                </Text>
                <Text style={styles.subtile}>
                    {descripcion}
                </Text>
            </View>

        </View>
    )
}

export default ErrorComponent


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height:400,
    },

    cajita: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        flex: 1,
        padding: 12,
        backgroundColor: palette.dark.dark
    },

    title: {
        color: palette.primary.contrastText,
        fontSize:30,

    },
    subtile: {
        color: palette.primary.contrastText,
        fontSize:24,
    }
});

