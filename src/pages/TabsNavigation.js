import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { palette } from '../theme';
import ContactsPage from '../pages/ContactsPage'
const tema = {
    tabBarOptions: {
        labelStyle: { fontSize: 12 },
        style: {
            backgroundColor: palette.primary.main,
            color: palette.primary.contrastText,
            backgroundColor: palette.primary.main,
            color: palette.primary.contrastText
        },
    }
}


const rutas = {
    porAtender: {
        screen: props =>
            <ContactsPage
                titulo="Por Atender"
                mostrar={1}
            />,
        navigationOptions: {
            tabBarLabel: 'Atender'
        }
    },
    atendiendo: {
        screen: props => <ContactsPage titulo="En progreso" mostrar={2} />,
        navigationOptions: {
            tabBarLabel: 'En progreso'
        }
    },

    atendido: {
        screen: props => <ContactsPage titulo="Atendido" mostrar={3} />,
        tabBarLabel: 'Atendido',
        navigationOptions: {
            tabBarLabel: 'Vendido'
        }
    },
}



const TabNavigator = createMaterialTopTabNavigator(rutas, tema);

export default createAppContainer(TabNavigator);
