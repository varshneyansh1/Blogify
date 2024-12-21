import { StyleSheet } from 'react-native';
import React from 'react';
import Home from '../../screens/Home';
import Post from '../../screens/Post';
import Mypost from '../../screens/MyPost';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Account from '../../screens/Account';

const ScreenMenu = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerBackVisible: false, 
        }}
      />
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
        name="Account"
        component={Account}
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

