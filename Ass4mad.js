import * as React from 'react';
import  { useState } from 'react';
import { View, Text,Button ,TextInput,StyleSheet} from 'react-native';
import {AsyncStorage}from '@react-native-community/async-storage';
import { NavigationContainer,useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function SignupScreen({navigation}){
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Create an object to store the user data
      const userData = {
        name: name,
        email: email,
        password: password
      };

      // Store the user data in AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify(userData));

      // Display a success message or redirect the user
      alert('Sign-up successful!');
      // You can navigate the user to the login screen if needed
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );


}
function LoginScreen({navigation}) {
 
 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Retrieve user data from AsyncStorage
      const storedData = await AsyncStorage.getItem('userData');
      if (storedData) {
        const userData = JSON.parse(storedData);

        // Check if the provided email and password match the stored data
        if (email === userData.email && password === userData.password) {
          // Redirect the user to the profile screen
          navigation.navigate('ProfileScreen');
        } else {
          // Display an error message
          alert('Invalid email or password!');
        }
      } else {
        // Display an error message
        alert('User not found!');
      }
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );


}
function ProfileScreen({navigation}) {
 return (
 <View style={styles.container}>
 <Text style={styles.title}>Welcome to the Hospital Management System</Text>
 
 
 
 </View>
 );
}


const Stack = createNativeStackNavigator();
function App() {
 return (
 <NavigationContainer>
    <Stack.Navigator initialRouteName="SignupScreen">
    
     <Stack.Screen name="LoginScreen" component={LoginScreen} />
     <Stack.Screen name="SignupScreen" component={SignupScreen} />
     <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
 
 </NavigationContainer>
 );
}


export default App