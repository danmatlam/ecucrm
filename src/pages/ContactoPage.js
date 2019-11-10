import React from 'react'
import { View, Text } from 'react-native'
import { TextInput,Button } from 'react-native-paper';
import { palette , status} from '../theme';

const ContactoPage = (props) => {
    const contacto = props.navigation.state.params.contacto;
    const { nombre, foto, celular, email, estado } = contacto;
    const { inProgress, finish, reset } = contacto;

    return (
        <View>
            <Text>{nombre}</Text>
            <Text>{foto}</Text>
            <Text>{celular}</Text>
            <Text>{email}</Text>
            <Text>{estado}</Text>

            <Button onPress={inProgress} color={status.warning} mode="contained"  style={{margin:9}}>
                Atender
            </Button>
            <Button onPress={finish} color={status.success} mode="contained"  style={{margin:9}}>
                Cerrar
            </Button>
            <Button  onPress={reset}  color={status.danger} mode="contained"  style={{margin:9}}>
                Reset
            </Button>



        </View>
    )
}

export default ContactoPage
