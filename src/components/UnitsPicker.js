import { View, StyleSheet, Platform } from "react-native";
import React from "react";

import { Picker } from "@react-native-community/picker";

const UnitsPicker = ({ unitsSystem, setUnitsSystem }) => {
  return (
    <View style={styles.unitsSystem}>
      <Picker
        style={{ color: "rgba(231,76,60,1)" }}
        selectedValue={unitsSystem}
        onValueChange={(item) => setUnitsSystem(item)}
        mode="dropdown"
        itemStyle={{ fontSize: 12 }}
      >
        <Picker.Item label="°C" value="metric" />
        <Picker.Item label="°F" value="imperial" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  
  unitsSystem: {
    position: "absolute",
    // ...Platform.select({
    //   ios: {
    //     top: -30,
    //   },
    //   andoroid: {
    //     top: 30,
    //   },
    // }),
    top : 60,
    left: 20,
    height: 50,
    width: 100,
  },
});

export default UnitsPicker;
