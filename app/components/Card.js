import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Card = ({ userName, gameName, location, players, experience, date, time }) => {
  // Стан для відкриття/закриття додаткової інформації
  const [isExpanded, setIsExpanded] = useState(false);

  // Функція для перемикання стану
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.card}>
      {/* Основна частина картки */}
      <TouchableOpacity onPress={toggleExpand} style={styles.cardHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{userName[0]}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.gameName}>{gameName}</Text>
        </View>
      </TouchableOpacity>

      {/* Додаткова інформація */}
      {isExpanded && (
        <View style={styles.cardDetails}>
          <Text style={styles.detailsText}>Місце проведення: {location}</Text>
          <View style={styles.row}>
            <Text>К-ть гравців: {players}</Text>
            <Text>Досвід: {experience}</Text>
            <Text>Дата: {date} {time}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#EFEFEF",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#4D2D8F",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  avatarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  info: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  gameName: {
    fontSize: 14,
    color: "#666",
  },
  cardDetails: {
    backgroundColor: "#EAE4F2",
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  detailsText: {
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Card;
