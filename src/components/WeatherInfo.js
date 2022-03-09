import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const WeatherInfo = ({ currentWeather }) => {
  const {
    main: { temp },
    weather: [details],
    name,
  } = currentWeather;
  const { icon, main, description } = details;

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <View style={styles.weatherInfo}>
      <Text>{name}</Text>
      <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      <Text style={styles.weatherTemp}>{temp}°</Text>
      <Text style={styles.weatherDescription}>{description}</Text>
      <Text style={styles.weatherMain}>{main}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: "center",
    justifyContent : 'center'

  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherDescription: {
    textTransform: "capitalize",
  },
  weatherTemp: {
    fontSize: 40,
    color: '#9b59b6',
  },
  weatherMain: {
    fontSize: 20,
    color: "gray",
    fontWeight: "500",
    marginTop: 10,
  },
});

export default WeatherInfo;
