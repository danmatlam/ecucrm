import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { palette, status } from '../theme';

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const ContactoPage = (props) => {
    const contacto = props.navigation.state.params.contacto; // extraigo parametros
    const { nombre, foto, celular, email, estado } = contacto; /// extraigo variables
    const { inProgress, finish, reset } = contacto; /// extraigo funciones

    return (

        <View>
            <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle"
                    left={(props) => <Avatar.Image size={24} source={{ uri: foto }} />} />
                <Card.Cover source={{ uri: foto }} />
                <Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                    <Button onPress={reset} color={status.danger} style={styles.button} mode="contained"> Reiniciar</Button>
                    <Button onPress={finish} color={status.success} style={styles.button}   mode="contained">Cerrar</Button>
                    <Button onPress={inProgress} color={status.warning}  style={styles.button}  mode="contained" >Atender</Button>                
                </Card.Content>
            </Card>
        </View>

    )
}

const styles = StyleSheet.create({
    button: {
     marginVertical:6
    },
  });
  

export default ContactoPage
