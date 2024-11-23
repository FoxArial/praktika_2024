import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function HomeScreen({navigation}){
  const [isVisible, setIsVisible] = useState(true); // Стан для відображення елемента

  const handleClose = () => {
    setIsVisible(false); // Закриваємо елемент
  };

  return (
    <View style={styles.container}>
      {/* Закриваємий елемент */}
      {isVisible && (
        <View style={styles.dismissableContainer}>
          <Text style={styles.message}>Події незабаром</Text>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Інший контент */}
      <View style={styles.content}>
        <Text>Основний вміст сторінки.</Text>
        <Text>Він автоматично піднімається, якщо поле закрито.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  dismissableContainer: {
    backgroundColor: "#d9e8ff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  message: {
    color: "#4D2D8F",
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: "#4D2D8F",
    padding: 5,
    borderRadius: 15,
  },
  closeText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  content: {
    marginTop: 10,
  },
});
