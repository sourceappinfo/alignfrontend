import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "GlobalStyles";  // Use the alias 'GlobalStyles'

const Component = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ellipseContainer}>
        <Image
          style={styles.ellipse}
          contentFit="cover"
          source={require("assets/ellipse-2.png")}  // Use the 'assets' alias
        />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.ellipseContainer}>
        <Image
          style={styles.ellipse}
          contentFit="cover"
          source={require("assets/ellipse-6.png")}  // Use the 'assets' alias
        />
        <Text style={styles.text}>5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 972,
    left: 85,
    width: 160,
    height: 255,
    flexDirection: "column", // Stack the ellipses vertically
    justifyContent: "space-between", // Add space between them
    alignItems: "center", // Center them horizontally
  },
  ellipseContainer: {
    width: 26,
    height: 24,
    position: "relative", // Use relative positioning instead of absolute
  },
  ellipse: {
    width: "100%",
    height: "100%",
  },
  text: {
    position: "absolute", // This keeps the text centered on the ellipse
    top: 3,
    left: 8,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.overpassBold,
    color: Color.white,
    textAlign: "center",
    width: 10,
    height: 11,
  },
});

export default Component;
