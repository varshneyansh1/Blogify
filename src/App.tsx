import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigation from './navigation';


const App=()=> {
  return (
    <NavigationContainer>
    <RootNavigation />
    </NavigationContainer>

  );
}


export default App;
