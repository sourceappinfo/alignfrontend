import React from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily } from 'GlobalStyles';

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
  backgroundImage: {
    flex: 1,
  },
  button: {
    backgroundColor: Color.primary,
    borderRadius: 10,
    padding: 15,
  },
  buttonText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayBold,
  },
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  description: {
    color: Color.white,
    fontFamily: FontFamily.ralewayMedium,
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  navButtonLeft: {
    marginRight: 20,
  },
  navButtonText: {
    color: Color.primary,
    fontFamily: FontFamily.ralewayBold,
    fontSize: 16,
  },
  navigation: {
    flexDirection: 'row',
    marginTop: 30,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 40, 50, 0.3)', // 30% opacity
  },
  title: {
    color: Color.white,
    fontFamily: FontFamily.ralewayBold,
    fontSize: 30,
    marginBottom: 10,
  },
});

export default Verification;
