import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { STYLES_HELPERS_RN, palette, status } from '../theme'
import Icon from 'react-native-vector-icons/AntDesign';
const ContacItem = (props) => {
    // const foto = props.contacto.foto;
    // const nombre = props.contacto.nombre; d
    const {gestionar} = props;
    const { _id, foto, nombre, celular, email, estado } = props.contacto;
    return (
        <View>
            <ListItem 
                estado={estado}
                gestionar={gestionar} 
            >
                <Avatar foto={foto}></Avatar>
                <Nombre nombre={nombre+" "+_id}></Nombre>
                <ButtonContainer>
                    <IconButton icono='phone'/>
                    <IconButton icono='mail'/>
                </ButtonContainer>
            </ListItem>
        </View>
    )
}


const ListItem = (props) => {

    
    const {warning, danger, success } = status;

    return (
        <TouchableOpacity 
            onPress={props.gestionar}
            style={{
            ...STYLES_HELPERS_RN.shadowColor,
            backgroundColor: 
                    props.estado == 1 
                        ? danger 
                        : props.estado == 2 
                            ? warning 
                            :success,
            borderRadius: 18,
            padding: 9,
            marginVertical:9,
            flexDirection: "row",
            alignItems: 'center',
            width:'100%'
        }}>
           
            {props.children}
        </TouchableOpacity>
    )
}
const Avatar = (props) => {
    return (
        <View style={{ flex: 1.5 }}>
            <Image
                source={{ uri: props.foto }}
                style={{ width: 45, height: 45, borderRadius: 25 }}>
            </Image>
        </View>
    )
}
const Nombre = (props) => {
    return (
        <View style={{ flex: 6 }}>
            <Text style={{color:"#ffffff", fontSize:20}}>
                {props.nombre}
            </Text>
        </View>
    )
}
const ButtonContainer = (props) => {
    return (
        <View style={{ flex: 3,flexDirection: "row", alignItems: 'center',}}>
           {props.children}
        </View>
    )
}
const IconButton = (props) => {
    return (
            <TouchableOpacity style={{ 
                width: 30, 
                height: 30, 
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'#000000',
                marginHorizontal: 6,
                }}>
                <Icon 
                name={props.icono} 
                size={18} 
                color="#ffffff" />
            </TouchableOpacity>
    )
}


export default ContacItem;


