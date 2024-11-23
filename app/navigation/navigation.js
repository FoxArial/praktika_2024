import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getDatabase, ref, set } from 'firebase/database';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
const db = getDatabase();
const Stack = createStackNavigator();
export default function AppNavigation() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen}/>
    <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen}/>
    <Stack.Screen name="Register" options={{headerShown: false}} component={RegisterScreen}/>
    <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
    </Stack.Navigator>
  </NavigationContainer>

  );
}
