import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ContactsPage from './ContactsPage';
import ContactForm from '../components/ContactForm'
import ContactoPage from './ContactoPage';

const AppNavigator = createStackNavigator(
    {
        contactos: { screen: props => <ContactsPage titulo="Atendido" /> },
        concatForm: { screen: ContactForm},
        contacto: {screen: ContactoPage}
    }
);


export default createAppContainer(AppNavigator);


