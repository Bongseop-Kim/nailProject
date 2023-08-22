import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useImageState } from '../contexts/ImageContext';
import ImageBool from './ImageBool';

function CameraScreen() {
  const camera = useRef(null);
  const devices = useCameraDevices();
  const device = devices.back;
  const [imageSource, setImageSource] = useImageState();

  const [showCamera, setShowCamera] = useState(true);

  const capturePhoto = async () => {
    setShowCamera(false);
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      setImageSource('file://' + photo.path);
      setShowCamera(false);
      // console.log(photo.path);
    }
  };

  if (device == null) {
    return <Text>Camera not available</Text>;
  }

  return (
    <View style={styles.container}>
      {showCamera ? (
        <>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={showCamera}
            photo={true}
          />
          <Image source={require('../assets/nail.png')} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.camButton}
              onPress={() => capturePhoto()}
            />
          </View>
        </>
      ) : (
        <ImageBool text="다시 촬영" onPress={() => setShowCamera(true)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    top: 0,
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    padding: 20,
  },
  camButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    //ADD backgroundColor COLOR GREY
    backgroundColor: '#B2BEB5',
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
});

export default CameraScreen;
