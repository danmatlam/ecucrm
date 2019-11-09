import React, { Component } from 'react'
import { Text, View , ScrollView} from 'react-native'
import Contacts from '../components/Contacts'

export default class ContactsPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            atender:[
                {
                    nombre:'Daniel',
                    foto:'https://images.pexels.com/photos/3098734/pexels-photo-3098734.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                },
                {
                    nombre:'Daniel',
                    foto:'https://images.pexels.com/photos/3098734/pexels-photo-3098734.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                },
                {
                    nombre:'Daniel',
                    foto:'https://images.pexels.com/photos/2710131/pexels-photo-2710131.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                },
                {
                    nombre:'Daniel',
                    foto:'https://images.pexels.com/photos/3098734/pexels-photo-3098734.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                },
                {
                    nombre:'Daniel',
                    foto:'https://images.pexels.com/photos/2710131/pexels-photo-2710131.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                },      {
                    nombre:'Daniel',
                    foto:'https://images.pexels.com/photos/3098734/pexels-photo-3098734.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                },
                {
                    nombre:'Daniel',
                    foto:'https://images.pexels.com/photos/2710131/pexels-photo-2710131.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                },      {
                    nombre:'Daniel',
                    foto:'https://images.pexels.com/photos/3098734/pexels-photo-3098734.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                },
                {
                    nombre:'Daniel',
                    foto:'https://images.pexels.com/photos/2710131/pexels-photo-2710131.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                },      {
                    nombre:'Daniel',
                    foto:'https://images.pexels.com/photos/3098734/pexels-photo-3098734.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                },
                {
                    nombre:'Daniel',
                    foto:'https://images.pexels.com/photos/2710131/pexels-photo-2710131.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                },
                {
                    nombre:'Daniel',
                    foto:'https://images.pexels.com/photos/3098734/pexels-photo-3098734.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                },
                {
                    nombre:'Daniel',
                    foto:'https://images.pexels.com/photos/2710131/pexels-photo-2710131.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                },
            ],
            atendido:[],
            confirmado:[],
        }
    }
    render() {
        return (
            <ScrollView>
                {
                    this.state.atender.map((item, index) => (
                        <Contacts 
                            key={index}
                            contacto={item}
                        ></Contacts>
                    ))
                }
            </ScrollView>
        )
    }
}
