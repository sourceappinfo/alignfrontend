import React from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily, FontSize, Border } from 'GlobalStyles';

const backgroundImage = require('assets/eco-fashion-background.jpg');

const EcoFashion = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.title}>EcoFashion</Text>
          <Text style={styles.description}>
            Explore sustainable and eco-friendly fashion choices, made with care for the environment.
          </Text>

          {/* Navigation Buttons */}
          <TouchableOpacity 
            style={[styles.navButton, styles.navButtonLeft]} 
            onPress={() => navigation.goBack('Recomendations')}>
            <Text style={styles.navButtonText}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.navButton, styles.navButtonRight]} 
            onPress={() => navigation.navigate('GreenTech')}>
            <Text style={styles.navButtonText}>→</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 40, 50, 0.3)', // Adjustable opacity
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: Color.white,
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: FontSize.size_21xl,
    marginBottom: 10,
  },
  description: {
    color: Color.white,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.paragraphRegular_size,
    textAlign: 'center',
  },
  // Navigation buttons at the bottom
  navButton: {
    position: 'absolute',
    bottom: 40,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Light opacity for buttons
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
    left: 30, // Position for left arrow
  },
  navButtonRight: {
    right: 30, // Position for right arrow
  },
  navButtonText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: 20,
  },
});

export default EcoFashion;
