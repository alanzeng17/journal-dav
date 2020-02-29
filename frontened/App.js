import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/loginScreen'
import HomeScreen from './screens/homeScreen'
import SignupScreen from './screens/signupScreen'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} 
          options={{
            title:"",          
            headerShown: false
          }}  
        />
        <Stack.Screen name="Home" component={HomeScreen} 
          options={{
            title:"",          
            headerShown: false
          }} 
        />
        <Stack.Screen name="Signup" component={SignupScreen} 
          options={{
            title:"",          
            headerShown: true,
            headerStyle: {
              backgroundColor: "#003f5c"
            }
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
