import React from "react";
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily } from "GlobalStyles";

// Placeholder image
const backgroundImage = require('assets/verification_background.jpg');

const Verification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
        {/* Light Overlay */}
        <View style={styles.overlay} />

        <View style={styles.content}>
          <Text style={styles.title}>Verification</Text>
          <Text style={styles.description}>Please verify your email to continue.</Text>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('SignIn')}
            activeOpacity={0.8}
            accessibilityLabel="Go to Sign In"
          >
            <Text style={styles.buttonText}>Go to Sign In</Text>
          </TouchableOpacity>

          <View style={styles.navigation}>
            <TouchableOpacity 
              style={styles.navButtonLeft} 
              onPress={() => navigation.goBack()}
              activeOpacity={0.8}
              accessibilityLabel="Go back"
            >
              <Text style={styles.navButtonText}>← Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 40, 50, 0.3)', // 30% opacity
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: FontFamily.ralewayBold,
    marginBottom: 10,
    color: Color.white,
  },
  description: {
    fontSize: 16,
    fontFamily: FontFamily.ralewayMedium,
    marginBottom: 20,
    textAlign: 'center',
    color: Color.white,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: Color.primary,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayBold,
  },
  navigation: {
    flexDirection: 'row',
    marginTop: 30,
  },
  navButtonLeft: {
    marginRight: 20,
  },
  navButtonText: {
    fontSize: 16,
    color: Color.primary,
    fontFamily: FontFamily.ralewayBold,
  },
});

export default Verification;
