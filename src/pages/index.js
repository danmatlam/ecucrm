import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ContactsPage from './ContactsPage';
import ContactForm from '../components/ContactForm'

const AppNavigator = createStackNavigator(
    {
        // contactos: {screen: ContactsPage},
        // contacto: {screen: Contact}
        contactos: { screen: props => <ContactsPage titulo="Atendido" /> },
        concatForm: { screen: ContactForm}
    }
);


export default createAppContainer(AppNavigator);


