import React from 'react';
import {StyleSheet, View, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from "./NavbarTop";
import Drawer from "./Drawer";

export default function SearchScreen({navigation}) {
    const handleMenuPress = () => Alert.alert("Меню натиснуто!");
    const handleSearchPress = () => Alert.alert("Пошук натиснуто!");
    const handleProfilePress = () => Alert.alert("Профіль натиснуто!");

    return (
       <SafeAreaView>
        <View style={styles.navContainer}> 
        <Text> hiii</Text>
        <Navbar
        onMenuPress={handleMenuPress}
        onSearchPress={handleSearchPress}
        onProfilePress={handleProfilePress}
      />
        </View> 
        </SafeAreaView> 
        
    );
}

const styles = StyleSheet.create({
    navContainer:{
        position:"absolute",
        backgroundColor: '#6750A4',
        top: 0,
        height: '50',
    }

})


