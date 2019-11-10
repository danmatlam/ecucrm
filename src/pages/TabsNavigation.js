import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { palette } from '../theme';
import ContactsPage from '../pages/ContactsPage'

const tema = {
    activeTintColor: '#e91e63',
    tabBarOptions: {
      labelStyle: { fontSize: 12 },
      style: {
        backgroundColor: palette.secondary.main,
        color: palette.secondary.contrastText
      },
    }
  }
  

const rutas = {
    porAtender: {
        screen: props => <ContactsPage titulo="Por Atender" />,
        navigationOptions: {
            tabBarLabel: 'Atender'
        }
    },
    atendiendo: {
        screen: props => <ContactsPage titulo="En progreso" />,
        navigationOptions: {
            tabBarLabel: 'En progreso'
        }
    },
    atendido: {
        screen: props => <ContactsPage titulo="Atendido" />,
        tabBarLabel: 'Atendido',
        navigationOptions: {
            tabBarLabel: 'Vendido'
        }
    },
}



const TabNavigator = createMaterialTopTabNavigator(rutas, tema);

export default createAppContainer(TabNavigator);
