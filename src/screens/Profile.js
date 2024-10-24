import * as React from "react";
import { Image, TouchableOpacity, Text, StyleSheet, View, ImageBackground } from "react-native";
import { Padding, Color, Border, FontFamily, FontSize } from "GlobalStyles"; // Corrected path
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const backgroundImage = require('assets/profilebackground.jpg'); // Add your background image here

const Profile = () => {
  const navigation = useNavigation(); // Navigation hook to handle navigation

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
      {/* Dark Overlay for Contrast */}
      <View style={styles.overlay} />

      <View style={styles.profile}>
        <Image
          style={styles.profileChild}
          contentFit="cover"
          source={require("assets/profileicon.png")}  // Corrected path
        />
        <View style={[styles.searchbutton, styles.searchbuttonPosition]}>
          <Text style={[styles.emmanuelOyiboke, styles.emmanuelOyibokeTypo]}>
            EMMANUEL OYIBOKE
          </Text>
        </View>
        <Text style={[styles.yourName, styles.yourNameLayout]}>Your Name</Text>
        <View style={styles.profileItem} />
        {/* Softened Save Now Button */}
        <TouchableOpacity style={styles.saveNowButton}>
          <Text style={styles.saveNowText}>Save Now</Text>
        </TouchableOpacity>
        <View style={[styles.searchbutton1, styles.searchbuttonPosition]}>
          <Text
            style={[styles.emmanueloyibokegmailcom, styles.emmanuelOyibokeTypo]}
          >
            emmanueloyiboke@gmail.com
          </Text>
        </View>
        <Text style={[styles.emailAddress, styles.yourNameLayout]}>
          Email Address
        </Text>
        <Image
          style={styles.eyeIcon}
          contentFit="cover"
          source={require("assets/eye.png")}  // Corrected path
        />
        <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
        <Text style={[styles.recoveryPassword, styles.passwordTypo]}>
          Recovery Password
        </Text>

        {/* Navigation Buttons */}
        <TouchableOpacity 
          style={[styles.navButton, styles.navButtonLeft]} 
          onPress={() => navigation.goBack()} // Back button functionality
        >
          <Text style={styles.navButtonText}>←</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navButton, styles.navButtonRight]} 
          onPress={() => navigation.navigate('SideMenu')} // Forward button functionality
        >
          <Text style={styles.navButtonText}>→</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  // Added overlay for better text visibility
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0)', // 40% opacity dark overlay
  },
  searchbuttonPosition: {
    paddingBottom: Padding.p_base,
    paddingRight: Padding.p_38xl,
    paddingTop: Padding.p_base,
    paddingLeft: Padding.p_sm,
    alignItems: "center",
    flexDirection: "row",
    width: 378,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_sm,
    left: 31,
    position: "absolute",
  },
  emmanuelOyibokeTypo: {
    color: Color.b2B2B,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    lineHeight: 16,
  },
  yourNameLayout: {
    height: 23,
    lineHeight: 20,
    textAlign: "left",
  },
  saveNowText: {
    color: Color.white,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  passwordTypo: {
    fontWeight: "800",
    color: Color.white,
    fontSize: FontSize.paragraphRegular_size,
    position: "absolute",
  },
  profileChild: {
    top: 125,
    left: 158,
    width: 121,
    height: 124,
    position: "absolute",
  },
  emmanuelOyiboke: {
    textAlign: "left",
    textTransform: "capitalize",
  },
  searchbutton: {
    top: 297,
  },
  yourName: {
    top: 261,
    width: 95,
    color: Color.white,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    position: "absolute",
    fontSize: FontSize.paragraphRegular_size,
    lineHeight: 20,
    left: 31,
  },
  profileItem: {
    height: "5.89%",
    width: "85.8%",
    top: "50%",
    right: "7.16%",
    bottom: "44.11%",
    left: "7.05%",
    borderRadius: 12,
    backgroundColor: "#13557b",
    position: "absolute",
  },
  saveNowButton: {
    height: 50,
    width: 150,
    top: "52%",
    left: "37%",
    borderRadius: 30,
    backgroundColor: 'rgba(19, 85, 123, 0.7)', // Softer background with opacity
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  emmanueloyibokegmailcom: {
    textTransform: "lowercase",
    textAlign: "left",
  },
  searchbutton1: {
    top: 401,
  },
  emailAddress: {
    top: 365,
    width: 122,
    color: Color.white,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    position: "absolute",
    fontSize: FontSize.paragraphRegular_size,
    lineHeight: 20,
    left: 31,
  },
  eyeIcon: {
    height: "2.51%",
    width: "5.45%",
    top: "56.14%",
    right: "10.34%",
    bottom: "41.35%",
    left: "84.2%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  password: {
    top: 594,
    left: 335,
    fontFamily: FontFamily.ralewayExtraBold,
    width: 83,
    height: 23,
    lineHeight: 20,
    textAlign: "left",
  },
  recoveryPassword: {
    top: 561,
    left: 228,
    fontFamily: FontFamily.poppinsExtraBold,
    textAlign: "right",
    width: 180,
    height: 18,
    lineHeight: 16,
    fontWeight: "800",
  },
  profile: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorBlack,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 956,
  },
  // Navigation Button styles
  navButton: {
    position: 'absolute',
    bottom: 40,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  navButtonLeft: {
    left: 30,
  },
  navButtonRight: {
    right: 30,
  },
  navButtonText: {
    color: Color.white,
    fontSize: 20,
    fontFamily: FontFamily.ralewayExtraBold,
  },
});

export default Profile;
