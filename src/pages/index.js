import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ContactsPage from './ContactsPage';
import ContactForm from '../components/ContactForm'
import ContactoPage from './ContactoPage';
import TabsNavigation from './TabsNavigation';

const AppNavigator = createStackNavigator(
    {
        home:{ screen : TabsNavigation},
        contactos: { screen: ContactsPage },
        concatForm: { screen: ContactForm},
        contacto: {screen: ContactoPage}
    }
);


export default createAppContainer(AppNavigator);


