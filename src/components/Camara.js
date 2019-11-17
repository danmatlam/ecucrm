import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { IconButton } from 'react-native-paper';
import {palette} from '../theme'
export default class Camara extends React.Component {
  state = {
    isCapturing: false,
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };
  async accessCamera() {
    if (!this.state.isCapturing) {
      this.setState({ isCapturing: true }); // deshabilitar boton
      let photo = await this.camera.takePictureAsync();
      this.props.storeUpload(photo.uri)
      this.setState({ isCapturing: false });// habilitar boton
    }
  }
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  render() {
    const { hasCameraPermission, isCapturing } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera 
          ref={ref => { this.camera = ref }}
          style={{ flex: 1 }} type={this.state.type}>
            <View style={styles.Botonera}>
              <IconButton
                icon="sync" color={palette.secondary.main} size={45}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }
                }>
                Rotar
              </IconButton>
              <IconButton
                disabled={isCapturing}
                icon="camera" color={palette.primary.main} size={60}
                onPress={() => this.accessCamera()}>
                Guardar
              </IconButton>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  Botonera: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    width: '100%',
    marginBottom: 24,
    paddingVertical: 30,
  },
});

