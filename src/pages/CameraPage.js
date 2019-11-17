import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Camara from '../components/Camara'
import { storageRef } from '../../firebase/firestore'


export default class CameraPage extends Component {



    state = {
        uploadProgress: 0,
        uploadedPhotoUrl: null,
    };


    async  storeUpload(uri, _id) {
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', uri, true);
            xhr.send(null);
        });
        const ref = storageRef.ref().child('contactos/'+_id+'.png');
        const snapshot = await ref.put(blob);
        blob.close();

        const uploadedPhotoUrl = await snapshot.ref.getDownloadURL();
        this.setState({ uploadedPhotoUrl: uploadedPhotoUrl });// habilitar boton


    }





    render() {
        const _id = this.props.navigation.state.params._id;
    
    

        return (
            
            <View style={{ flex: 1 }}>
                {
                    this.state.uploadedPhotoUrl &&
                    <View style={{ flex: 3 }}>
                        <Image
                            source={{ uri: this.state.uploadedPhotoUrl }}
                            style={{ width: 200, height: 200, borderRadius: 25 }}>
                        </Image>
                    </View>
                }



                <View style={{ flex: 6 }}>
                    <Text>{this.state.uploadProgress}</Text>
                    <Camara
                    _id={_id}
                    storeUpload={this.storeUpload} />
                </View>



            </View>
        )
    }
}
