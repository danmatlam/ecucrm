import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ContactosPage from './ContactosPage';
import ContactForm from '../components/ContactForm'
import ContactoPage from './ContactoPage';
import TabsNavigation from './TabsNavigation';
import { palette } from '../theme';



const tema = {
    defaultNavigationOptions: {
        headerStyle: { 
            backgroundColor: palette.primary.main, 
            borderBottomWidth: 0
        },
        headerTintColor: palette.primary.contrastText,
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
}

let rutas = {

    home: {
        screen: TabsNavigation,
        navigationOptions: {
            title: 'EcuCrm',
        },

    },
    contactos: {
        screen: ContactosPage,
        navigationOptions: {
            title: 'Contactos'
        }
    },

    contacto: {
        screen: ContactoPage,
        navigationOptions: {
            title: 'Contacto'
        }
    },

    concatForm: {
        screen: ContactForm,
        navigationOptions: {
            title: 'Contacto'
        }
    },
}

const AppNavigator = createStackNavigator(rutas, tema);


export default createAppContainer(AppNavigator);


