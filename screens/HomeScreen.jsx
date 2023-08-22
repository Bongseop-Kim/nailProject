import React from 'react';
import { View, NativeModules, Button, Text } from 'react-native';

const HomeScreen = () => {
  const { ToastModule } = NativeModules;

  return (
    <View>
      <Button
        title="test"
        onPress={() => ToastModule.show('test Module!', ToastModule.SHORT)}
      />
    </View>
  );
};

export default HomeScreen;
