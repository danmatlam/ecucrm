import React from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { palette, status } from '../theme';
import { withNavigation } from 'react-navigation';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { CONTACTOS_READ, CONTACTO_UPDATE } from '../state/actionTypes'
import { connect } from 'react-redux'
import ContactForm from '../components/ContactForm'
import { ScrollView } from 'react-native-gesture-handler';
const ContactoPage = (props) => {
    const contacto = props.navigation.state.params.contacto; // extraigo parametros
    const { _id, nombre, foto, celular, email, estado } = contacto; /// extraigo variables
    const { inProgress, finish, reset } = contacto; /// extraigo funciones

    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

    return (
        <View style={styles.container}>


        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset} >

        <ScrollView >
                <Card>
                    <Card.Title title="Card Title" subtitle={_id}
                        left={(props) => <Avatar.Image size={24} source={{ uri: foto }} />} />
                    <Card.Cover source={{ uri: foto }} />
                    <Card.Content>
                        <Title>Card title</Title>
                        <Paragraph>Card content</Paragraph>
                        <Button onPress={reset} color={status.danger} style={styles.button} mode="contained"> Por atender</Button>
                        <Button onPress={inProgress} color={status.warning} style={styles.button} mode="contained" >En progreso</Button>
                        <Button onPress={finish} color={status.success} style={styles.button} mode="contained">Vendido</Button>
                    </Card.Content>
                </Card>


                <ContactForm
                    updateContactos={props.updateContactos}
                    contacto={contacto}
                />
      
 
        </ScrollView>

        </KeyboardAvoidingView>
    
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        marginVertical: 6
    },
});


const mapDispatchToProps = (dispatch) => {
    return {
        updateContactos: payload => dispatch({ type: CONTACTO_UPDATE, payload })
    }
};
export default withNavigation(connect(null, mapDispatchToProps)(ContactoPage));


