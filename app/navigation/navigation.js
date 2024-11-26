import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getDatabase, ref, set } from 'firebase/database';
import { createDrawerNavigator } from "@react-navigation/drawer";

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreateOfflineGame from '../screens/CreateOfflineGame';
import CreateOnlineGame from '../screens/CreateOnlineGame';
import SettingsScreen from '../screens/SettingScreen';


const db = getDatabase();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function AppNavigation() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen}/>
    <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen}/>
    <Stack.Screen name="Register" options={{headerShown: false}} component={RegisterScreen}/>
    <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
    <Stack.Screen name="Search" options={{headerShown:false}} component={SearchScreen}/>
    <Stack.Screen name="Profile" options={{headerShown:false}} component={ProfileScreen}/>
    <Stack.Screen name="CreateOnlineGame" options={{headerShown:false}} component={CreateOnlineGame}/>
    <Stack.Screen name="CreateOfflineGame" options={{headerShown:false}} component={CreateOfflineGame}/>
    </Stack.Navigator>
  </NavigationContainer>,

<NavigationContainer>
<Drawer.Navigator>
  <Drawer.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
  <Drawer.Screen name="Profile" options={{headerShown:false}} component={ProfileScreen}/>
  <Drawer.Screen name="Settings" component={SettingsScreen} />
</Drawer.Navigator>
</NavigationContainer>

  );
}
