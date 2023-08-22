import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import { ImageContextProvider } from './contexts/ImageContext';

function App() {
  return (
    <ImageContextProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ImageContextProvider>
  );
}

export default App;
