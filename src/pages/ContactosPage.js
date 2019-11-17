import React, { Component } from 'react'
import { Text, View, ScrollView, ActivityIndicator } from 'react-native'
import ContactItem from '../components/ContactItem'
import { withNavigation } from 'react-navigation';
import { CONTACTOS_READ, CONTACTO_UPDATE } from '../state/actionTypes'
import { connect } from 'react-redux'
import ErrorComponent from '../components/ErrorComponent'
class ContactosPage extends Component {


    componentDidMount() {
        this.props.getContactos();
    }

    gestionar(contacto) {
        this.props.navigation.navigate('contacto', { contacto });
    }

    cambiarEstado(contacto, estado) {
        contacto.estado = estado;
        this.props.updateContactos(contacto);
        this.props.navigation.navigate('home');
    }

    render() {

        const { contactos, fetchingList, errorList } = this.props.contactosState;
        console.log(errorList)
        return (
            <ScrollView>
                <Text style={{ fontSize: 24, fontWeight: '600' }}>
                    {this.props.titulo}
                </Text>

                {

                    fetchingList ? 
                 
                    <ActivityIndicator size="large" color="#0000ff" />
           

                        : errorList ?  <ErrorComponent mensaje={errorList.mensaje} descripcion={'...'} />
                            : contactos && contactos.map((item, index) => {
                                const nuevoItem = Object.assign(
                                    item,
                                    { inProgress: () => this.cambiarEstado(item, 2) },
                                    { finish: () => this.cambiarEstado(item, 3) },
                                    { reset: () => this.cambiarEstado(item, 1) }
                                );

                                if (this.props.mostrar == nuevoItem.estado) {
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



const mapStateToProps = (state) => {
    return {
        contactosState: state.contactosState
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getContactos: () => dispatch({ type: CONTACTOS_READ }),
        updateContactos: payload => dispatch({ type: CONTACTO_UPDATE, payload })
    }
};


export default withNavigation(
    connect(mapStateToProps, mapDispatchToProps)(ContactosPage)
);