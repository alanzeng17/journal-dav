import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export default function LoginScreen({ navigation }) {
  return (
  <View style={styles.container}>
    <Text style={styles.logo}>JournalDAV</Text>    
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Username..." 
        placeholderTextColor="#003f5c"
        onChangeText={text => this.setState({email:text})}/>
    </View>
    <View style={styles.inputView}>
      <TextInput  
        secureTextEntry
        style={styles.inputText}
        placeholder="Password..." 
        placeholderTextColor="#003f5c"
        onChangeText={text => this.setState({password:text})}/>
    </View>
    <TouchableOpacity>
      <Text style={styles.forgot}>Forgot Password?</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.loginText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
      <Text style={styles.loginText}>Signup</Text>
    </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginText:{
    color:"white"
  }
});