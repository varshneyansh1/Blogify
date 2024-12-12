import { StyleSheet } from 'react-native';
import React from 'react';
import Home from '../../screens/Home';
import Post from '../../screens/Post';
import Mypost from '../../screens/MyPost';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ScreenMenu = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Welcome',
          headerBackVisible: false, 
        }}
      />
      <Stack.Screen
        name="Post"
        component={Post}
        options={{
          headerBackVisible: false, 
        }}
      />
      <Stack.Screen
        name="My Post"
        component={Mypost}
        options={{
          headerBackVisible: false, 
        }}
      />
    </Stack.Navigator>
  );
};

export default ScreenMenu;

