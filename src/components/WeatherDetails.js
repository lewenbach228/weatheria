import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const WeatherDetails = ({ currentWeather, unitsSystem }) => {
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = currentWeather;

  const windSpeed =
    unitsSystem === "metric"
      ? `${Math.round(speed)} m/s`
      : `${Math.round(speed)} mile/h`;
  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailBox,
            borderRightWidth: 1,
            borderRightColor: "#dbdbdb",
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5 name="temperature-low" size={25} color= '#9b59b6' />
            <View style={styles.weatherDetailsItems}>
              <Text>Fraîcheur : </Text>
              <Text style={styles.textSecondary}>{feels_like}°</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons name="water" size={30} color= '#9b59b6' />
            <View style={styles.weatherDetailsItems}>
              <Text>Humidité : </Text>
              <Text style={styles.textSecondary}>{humidity} %</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailBox,
            borderRightWidth: 1,
            borderRightColor: "#dbdbdb",
          }}
        >
          <View
            style={{
              ...styles.weatherDetailsRow,
              // borderTopWidth: 1,
              // borderTopColor: "#dbdbdb",
            }}
          >
            <FontAwesome5 name="wind" size={30} color='#9b59b6'/>
            <View style={styles.weatherDetailsItems}>
              <Text>Vent : </Text>
              <Text style={styles.textSecondary}>{windSpeed}</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="speedometer"
              size={30}
              color='#9b59b6'
            />
            <View style={styles.weatherDetailsItems}>
              <Text>Pression : </Text>
              <Text style={styles.textSecondary}>{pressure} hPa</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: "auto",
    margin: 15,
    borderWidth: 1,
    borderColor:"#dbdbdb",
    borderRadius: 10,
  },
  weatherDetailsRow: {
    
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  weatherDetailBox: {
    flex: 1,
    padding: 20,
  },
  weatherDetailsItems: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  textSecondary: {
    fontSize: 15,
    color: '#9b59b6',
    fontWeight: "700",
    margin: 7,
  },
});
export default WeatherDetails;
