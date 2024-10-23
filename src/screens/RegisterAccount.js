import React from 'react';
import { Text, StyleSheet, View, ImageBackground, SafeAreaView, TouchableOpacity } from "react-native";
import { Color, FontFamily } from "GlobalStyles";
import { useNavigation } from '@react-navigation/native';

const backgroundImage = require('assets/frontoceanpic.jpg');

const RegisterAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
        <View style={styles.overlay} />

        <SafeAreaView style={styles.safeArea}>
          {/* Main Content */}
          <View style={styles.centerContent}>
            <Text style={styles.alignText}>{`ALIGN.`}</Text>
            <Text style={styles.consciousText}>Conscious Consumption</Text>
          </View>

          {/* Navigation Buttons Container */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.navButton}
              onPress={() => navigation.navigate('Search')}
            >
              <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.navButton, styles.primaryButton]}
              onPress={() => navigation.navigate('SignIn')}
            >
              <Text style={[styles.buttonText, styles.primaryButtonText]}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.navButton}
              onPress={() => navigation.navigate('Intro')}
            >
              <Text style={styles.buttonText}>How</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 50, 0.45)',
  },
  safeArea: {
    flex: 1,
    justifyContent: "space-between", // This will push the buttons to the bottom
    paddingBottom: 50, // Add some padding at the bottom
  },
  centerContent: {
    flex: 1,
    alignItems: "center",
    position: 'relative', // This ensures proper absolute positioning of children
  },
  alignText: {
    position: 'absolute',
    fontSize: 100,
    marginLeft: 20,
    lineHeight: 95,
    fontFamily: FontFamily.sonder,
    textAlign: "center",
    color: Color.white,
    width: '100%',
    top: '35x%', // Adjust this value to position ALIGN vertically
  },
  consciousText: {
    position: 'absolute',
    fontSize: 28,
    lineHeight: 28,
    fontFamily: FontFamily.trispaceLight,
    textAlign: "center",
    color: Color.white,
    width: '100%',
    top: '48%', // Adjust this value to position Conscious Consumption vertically
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  navButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    minWidth: 100,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  buttonText: {
    color: Color.white,
    fontSize: 16,
    fontFamily: FontFamily.ralewayMedium,
  },
  primaryButtonText: {
    color: '#13557B',
    fontFamily: FontFamily.ralewayExtraBold,
  },
});

export default RegisterAccount;