import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
// foto, nombre, celular, email, estado 
const ContactForm = (props) => {

    const { contacto } = props; 
    const _id = props.id
    const [foto, setFoto] = useState(contacto.foto);
    const [nombre, setNombre] = useState(contacto.nombre);
    const [celular, setCelular] = useState(contacto.celular);
    const [email, setEmail] = useState(contacto.email);
    const [estado, setEstado] = useState(contacto.estado);


    const handleSubmit = () => {
        console.log(props.updateContactos)
        props.updateContactos({
                
            _id,
                foto,
                nombre,
                celular,
                email,
                estado
            }
        );
        alert('here...')
    }


    return (
        <View>
            <Text style={{ fontSize: 40 }}>{nombre}</Text>
           
            <TextInput
                label='Foto'
                value={foto}
                onChangeText={e => setFoto(e)}
            />
            <TextInput
                label='Nombre'
                value={nombre}
                onChangeText={e => setNombre(e)}
            />

            <TextInput
                label='Celular'
                value={celular}
                onChangeText={e => setCelular(e)}
            />

            <TextInput
                label='Email'
                value={email}
                onChangeText={e => setEmail(e)}
            />



            <Button mode="contained" onPress={handleSubmit}>
                <Icon></Icon>
                Guardar
            </Button>
        </View>
    )
}
export default ContactForm
