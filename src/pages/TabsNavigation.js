import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { palette } from '../theme';
import ContactosPage from '../pages/ContactosPage'
const tema = {
    tabBarOptions: {
        labelStyle: { fontSize: 18 },
        upperCaseLabel: false,
        style: {
            backgroundColor: palette.primary.main,
            color: palette.primary.contrastText,
            backgroundColor: palette.primary.main,
            color: palette.primary.contrastText,
            fontSize:20
        },
        indicatorStyle: {
            backgroundColor: 'red',
        },
    }
}


const rutas = {
    porAtender: {
        screen: props =>
            <ContactosPage
                titulo="Por Atender"
                mostrar={1}
            />,
        navigationOptions: {
            tabBarLabel: 'Atender'
        }
    },
    atendiendo: {
        screen: props => <ContactosPage titulo="En progreso" mostrar={2} />,
        navigationOptions: {
            tabBarLabel: 'En progreso'
        }
    },

    atendido: {
        screen: props => <ContactosPage titulo="Atendido" mostrar={3} />,
        tabBarLabel: 'Atendido',
        navigationOptions: {
            tabBarLabel: 'Vendido'
        }
    },
}



const TabNavigator = createMaterialTopTabNavigator(rutas, tema);

export default createAppContainer(TabNavigator);
