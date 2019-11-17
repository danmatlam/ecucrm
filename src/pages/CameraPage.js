import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Camara from '../components/Camara'
import { storageRef } from '../../firebase/firestore'
export default class CameraPage extends Component {

    state = {
        uploadProgress: 0,
    };

    uriToBlob = (uri) => {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function() {
            // return the blob
            resolve(xhr.response);
          };
          
          xhr.onerror = function() {
            // something went wrong
            reject(new Error('uriToBlob failed'));
          };
          // this helps us get a blob
          xhr.responseType = 'blob';
          xhr.open('GET', uri, true);
          
          xhr.send(null);
        });
      }
 


    storeUpload(file) {
        let ref = storageRef.ref();
        try {
            let uploadTask = ref.child('contactos/file.png').put(file);
            uploadTask.on(
                firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
                function (snapshot) {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    this.setState({ uploadProgress: progress }); 
                    console.log('Upload is ' + progress + '% done');
                },
                function (error) {
                    switch (error.code) {
                        case 'storage/unauthorized': break;
                        case 'storage/canceled': break;
                            break;
                    }
                },
                function () {
                    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        /// Proceso para guardar url de foto
                        console.log('File available at', downloadURL);
                    });
                });

        }
        catch (error) {

        }

    }




    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>{this.state.uploadProgress}</Text>
                <Camara 
                    uriToBlob={uriToBlob}
                    storeUpload={storeUpload}
                />
            </View>
        )
    }
}
