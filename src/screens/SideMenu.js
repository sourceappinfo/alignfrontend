import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Button as RNEButton } from "@rneui/themed";
import { FontSize, Color, FontFamily, Border } from "GlobalStyles";  // Ensure this path is correct based on your alias

const SideMenu = () => {
  return (
    <View style={styles.sideMenu}>
      {/* User Name */}
      <Text style={styles.emmanuelOyiboke}>Emmanuel Oyiboke</Text>

      {/* Profile Picture */}
      <Image
        style={styles.sideMenuChild}
        contentFit="cover"
        source={require("assets/profileicon.png")}  // Corrected the image path
      />

      {/* Profile Icon */}
      <View style={styles.profileiconWrapper}>
        <View style={[styles.profileicon, styles.backarrowIconLayout]} />
      </View>

      {/* Profile Button */}
      <RNEButton
        title="Profile"
        radius="5"
        iconPosition="left"
        iconRight={true}
        type="clear"
        titleStyle={styles.groupButtonBtn}
        containerStyle={styles.groupButtonBtn1}
        buttonStyle={styles.groupButtonBtn2}
      />

      {/* Bag Icon */}
      <Image
        style={[styles.bag2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("assets/bag2.png")}  // Corrected the image path
      />

      {/* Recommendations Section */}
      <View style={[styles.directionLeftParent, styles.directionPosition]}>
        <Image
          style={[styles.directionLeftIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("assets/direction-left.png")}  // Corrected the image path
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("assets/vector8.png")}  // Corrected the image path
        />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("assets/vector9.png")}  // Corrected the image path
        />
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          contentFit="cover"
          source={require("assets/vector10.png")}  // Corrected the image path
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("assets/vector11.png")}  // Corrected the image path
        />
        <Text style={[styles.recomendations, styles.signOutLayout]}>
          Recommendations
        </Text>
      </View>
      
      {/* More UI Elements... */}
    </View>
  );
};

const styles = StyleSheet.create({
  groupButtonBtn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    fontFamily: "Raleway-ExtraBold",
  },
  groupButtonBtn1: {
    left: "7.77%",
    right: "10.27%",
    top: "36.47%",
    bottom: "60.92%",
    position: "absolute",
  },
  groupButtonBtn2: {
    height: "2.6%",
    width: "81.95%",
  },
  backarrowIconLayout: {
    overflow: "hidden",
    height: 30,
    width: 30,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  directionPosition: {
    right: "10.2%",
    position: "absolute",
  },
  vectorIconPosition: {
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  signOutLayout: {
    height: 25,
    lineHeight: 20,
    fontSize: FontSize.paragraphRegular_size,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  emmanuelOyiboke: {
    top: 249,
    left: 37,
    fontSize: FontSize.size_xl,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.ralewayMedium,
    width: 227,
    height: 29,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  sideMenuChild: {
    top: 111,
    left: 38,
    width: 119,
    height: 119,
    position: "absolute",
  },
  profileicon: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  profileiconWrapper: {
    top: 346,
    height: 30,
    width: 30,
    left: 28,
    position: "absolute",
  },
  bag2Icon: {
    height: "0.13%",
    width: "0.27%",
    top: "44.74%",
    right: "91.09%",
    bottom: "55.14%",
    left: "8.64%",
    maxHeight: "100%",
    position: "absolute",
  },
  directionLeftIcon: {
    height: "47.83%",
    width: "1.85%",
    top: "26.09%",
    right: "0%",
    bottom: "26.09%",
    left: "98.15%",
    maxHeight: "100%",
    position: "absolute",
  },
  vectorIcon: {
    height: "24.41%",
    width: "3.05%",
    top: "8.36%",
    right: "94.42%",
    bottom: "67.22%",
    left: "2.53%",
    maxHeight: "100%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "58.19%",
    width: "5.94%",
    top: "33.44%",
    right: "92.97%",
    bottom: "8.36%",
    left: "1.09%",
    maxHeight: "100%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "6.69%",
    top: "49.83%",
    bottom: "43.48%",
    left: "5.26%",
    maxHeight: "100%",
    position: "absolute",
  },
  vectorIcon3: {
    width: "8.14%",
    right: "91.86%",
  },
  recomendations: {
    top: 3,
    left: 57,
    width: 164,
    fontFamily: FontFamily.ralewayExtraBold,
    fontWeight: "800",
    height: 25,
    lineHeight: 20,
    fontSize: FontSize.paragraphRegular_size,
  },
  directionLeftParent: {
    height: "3.13%",
    width: "83.43%",
    top: "43.24%",
    bottom: "53.63%",
    left: "6.36%",
  },
  sideMenu: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorBlack,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 956,
  },
});

export default SideMenu;
