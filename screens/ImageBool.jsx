import React from 'react';
import { useImageState } from '../contexts/ImageContext';
import { Image, StyleSheet, View } from 'react-native';

import SquareButton from '../components/SquareButton';

const ImageBool = ({ text, onPress }) => {
  const [imageSource, setImageSource] = useImageState();

  const usePhoto = () => {
    // console.log(imageSource)
  };

  return (
    <>
      {imageSource !== '' ? (
        <Image
          style={styles.image}
          source={{
            uri: imageSource,
          }}
        />
      ) : null}

      <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
          <SquareButton text={text} onPress={onPress()} />
          <SquareButton text={' 사용 '} onPress={usePhoto} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    padding: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 9 / 16,
  },
});

export default ImageBool;
