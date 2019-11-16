import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import ContactItem from '../components/ContactItem'
import { withNavigation } from 'react-navigation';


class ContactsPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clientes: [
                {
                    nombre: 'Daniel',
                    foto: 'https://images.pexels.com/photos/3098734/pexels-photo-3098734.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                    celular: '0958989804',
                    email: 'hola@ecudevs.com',
                    estado: 1
                },
                {
                    nombre: 'Thian',
                    foto: 'https://images.pexels.com/photos/2710131/pexels-photo-2710131.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                    celular: '0958989804',
                    email: 'hola@ecudevs.com',
                    estado: 1
                },
                {
                    nombre: 'Paula',
                    foto: 'https://images.pexels.com/photos/3098734/pexels-photo-3098734.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                    celular: '0958989804',
                    email: 'hola@ecudevs.com',
                    estado: 2
                },
                {
                    nombre: 'Luis',
                    foto: 'https://images.pexels.com/photos/2710131/pexels-photo-2710131.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                    celular: '0958989804',
                    email: 'hola@ecudevs.com',
                    estado: 2
                },
                {
                    nombre: 'Adriana',
                    foto: 'https://images.pexels.com/photos/2710131/pexels-photo-2710131.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                    celular: '0958989804',
                    email: 'hola@ecudevs.com',
                    estado: 3
                },

            ]
        }
    }

    gestionar(contacto) {
        this.props.navigation.navigate('contacto', { contacto });
    }

    cambiarEstado(contacto, estado) {
        const clientes = this.state.clientes;
        const indice = clientes.findIndex(item => item.nombre === contacto.nombre);
        clientes[indice].estado = estado;
        this.setState({
            clientes: clientes
        });
        this.props.navigation.navigate('home');
    }

    render() {
        return (
            <ScrollView style={{padding:6}}>
                <Text style={{ fontSize: 24, fontWeight: '600' }}>
                    {this.props.titulo}
                </Text>
                {
                    this.state.clientes.map((item, index) => {
                        const nuevoItem = Object.assign(
                            item,
                            { inProgress: () => this.cambiarEstado(item, 2) },
                            { finish: () => this.cambiarEstado(item, 3) },
                            { reset: () => this.cambiarEstado(item, 1) }
                        );

                        if(this.props.mostrar == nuevoItem.estado){
                            return (
                                <ContactItem
                                    key={index}
                                    contacto={nuevoItem}
                                    gestionar={() => this.gestionar(item)}
                                ></ContactItem>
                            )
                        }
                    })
                }
            </ScrollView>
        )
    }
}



export default withNavigation(ContactsPage);