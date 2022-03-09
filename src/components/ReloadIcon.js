import { View, Platform, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
// import { colors } from "../utils/index";

const ReloadIcon = ({ loadWeather }) => {
  const reloadIconName = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";
  return (
    <View style={styles.reloadIcon}>
      <Ionicons
        onPress={loadWeather}
        name={reloadIconName}
        size={24}
        color= "rgba(231,76,60,1)"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  reloadIcon: {
    position: "absolute",
    top: 30,
    right: 20,
  },
});

export default ReloadIcon;
