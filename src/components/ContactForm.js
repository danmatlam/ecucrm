import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TextInput,Button } from 'react-native-paper';
const ContactForm = () => {
    const [nombres, setNombres] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const handleSubmit = () => {
        alert(nombres);
    }
    return (
        <View>
            <Text style={{ fontSize: 40 }}>{nombres}</Text>
            <TextInput
                label='Nombres'
                value={nombres}
                onChangeText={e => setNombres(e)}
            />
            <Button mode="contained" onPress={handleSubmit}>
                Guardar
            </Button>
        </View>
    )
}
export default ContactForm
