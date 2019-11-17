import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Camara from '../components/Camara'

export default class CameraPage extends Component {
    render() {
        return (
            <View style={{flex:1}}>
               <Camara/>
            </View>
        )
    }
}
