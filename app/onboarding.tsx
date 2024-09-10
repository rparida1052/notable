import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Client, Account, ID } from 'react-native-appwrite';
import React, { useContext, useState } from 'react';
import AppwriteService from '../appwrite';
import appwriteService from '../appwrite';
import AuthButton from '../component/authButton';
import InputText from '../component/inputText';
import { Redirect, useRouter } from 'expo-router';
import AuthContext from '../context/AuthContext';




export default function App() {
  const { setIsLoggedIn,setUser} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

 const handleLogin = async()=>{
  const response = await appwriteService.loginUser(email, password);
  if(response) {
    setIsLoggedIn(true);
    setUser(response);
  }
  router.replace('/');
 }
  return (
    <View style={styles.rootContainer}>
      <View>
        <InputText
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
        />
        <InputText
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
        />

        <AuthButton title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 0,
    justifyContent: "center",
  },
});

