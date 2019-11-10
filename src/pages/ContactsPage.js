import React, { Component } from 'react'
import { Text, View , ScrollView} from 'react-native'
import ContactItem from '../components/ContactItem'

export default class ContactsPage extends Component {

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
                    estado: 1
                },
                {
                    nombre: 'Luis',
                    foto: 'https://images.pexels.com/photos/2710131/pexels-photo-2710131.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                    celular: '0958989804',
                    email: 'hola@ecudevs.com',
                    estado: 1
                },
                {
                    nombre: 'Ricardo',
                    foto: 'https://images.pexels.com/photos/2710131/pexels-photo-2710131.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                    celular: '0958989804',
                    email: 'hola@ecudevs.com',
                    estado: 1
                },
            ]
        }
    }
    render() {
        return (
            <ScrollView>
                {
                    this.state.clientes.map((item, index) => (
                        <ContactItem 
                            key={index}
                            contacto={item}
                        ></ContactItem>
                    ))
                }
            </ScrollView>
        )
    }
}
