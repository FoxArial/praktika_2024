import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Filter = ({ onSort }) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterText}>Фільтрувати за:</Text>
      <TouchableOpacity onPress={() => onSort("gameName")} style={styles.filterButton}>
        <Text style={styles.buttonText}>Назва гри</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSort("level")} style={styles.filterButton}>
        <Text style={styles.buttonText}>Рівень гравця</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  filterText: {
    fontSize: 18,
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: "#4D2D8F",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Filter;
