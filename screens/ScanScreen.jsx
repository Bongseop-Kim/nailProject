import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Camera } from 'react-native-vision-camera';
import { launchImageLibrary } from 'react-native-image-picker';

import { useImageState } from '../contexts/ImageContext';
import ImageBool from './ImageBool';

const ScanScreen = () => {
  const navigation = useNavigation();
  const [imageSource, setImageSource] = useImageState();
  const [showImageBool, setShowImageBool] = useState(false);

  const onCamera = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();

    switch (cameraPermission) {
      case 'authorized':
        // 카메라 권한이 있을때 실행할 로직
        navigation.navigate('Camera');
        break;

      case 'denied':
        // 아직 권한 요청을 하지 않은 상태로 새롭게 권한 요청하기
        const newCameraPermission = await Camera.requestCameraPermission();

        if (newCameraPermission === 'authorized') {
          navigation.navigate('Camera');
        } else if (newCameraPermission === 'denied') {
          // 권한 요청을 했지만 거부됐을때 실행할 로직
          // ex) 설정으로 이동, 권한이 없으면 카메라 실행할 수 없다는 알림창 등등
          // await Linking.openSettings();
        }
        break;
    }
  };

  const onPicture = async () => {
    const result = await launchImageLibrary();
    if (result.didCancel) {
      return null;
    }
    const localUri = result.assets[0].uri;
    const uriPath = localUri.split('//').pop();
    // const imageName = localUri.split('/').pop();
    setImageSource('file://' + uriPath);
    setShowImageBool(true);
  };

  return (
    <>
      {showImageBool ? (
        <ImageBool text="다시 선택" onPress={() => setShowImageBool(false)} />
      ) : (
        <View style={styles.container}>
          <Pressable onPress={onCamera}>
            <Text style={styles.item}>사진촬영</Text>
          </Pressable>
          <Pressable onPress={onPicture}>
            <Text style={styles.item}>사진선택</Text>
          </Pressable>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
    color: 'black',
  },
});

export default ScanScreen;
