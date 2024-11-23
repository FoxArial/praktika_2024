import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather"; // Для іконок

const Navbar = ({ onMenuPress, onSearchPress, onProfilePress }) => {
  return (
    <View style={styles.navbar}>
      {/* Ліва частина: Меню */}
      <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
        <Icon name="menu" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Права частина: Пошук і Профіль */}
      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={onSearchPress} style={styles.iconButton}>
          <Icon name="search" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onProfilePress} style={styles.iconButton}>
          <Icon name="user" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: "#4D2D8F",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    width: '100%'
  },
  iconButton: {
    padding: 8,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Navbar;
