import React, {useState} from "react";
import { View, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Feather"; // Для іконок
import Filter from "../components/Filter";

function NavbarSearchTop() {
  const navigation = useNavigation();

  const [isFilterVisible, setFilterVisible] = useState(false);

  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible); // Змінює стан видимості фільтра
  };

  return (
    <View style={styles.navbar}>
      {/* Ліва частина: Меню */}
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.iconButton}>
        <Icon name="menu" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Права частина: Фільтр і Профіль */}
      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={toggleFilter} style={styles.iconButton}>
          <Icon name="filter" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.iconButton}>
          <Icon name="user" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <Modal visible={isFilterVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <Filter />
          
        </View>
      </Modal>
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

export default NavbarSearchTop;
