import React from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily, FontSize, Padding, Border } from 'GlobalStyles';

const backgroundImage = require('assets/ethical-gadgets-background.jpg');

const EthicalGadgets = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
        {/* Light Overlay */}
        <View style={styles.overlay} />

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.title}>Ethical Gadgets</Text>
          <Text style={styles.description}>
            Tech products designed with sustainability, ethical labor practices, and transparency in mind.
          </Text>
        </View>

        {/* Navigation Buttons */}
        <TouchableOpacity 
          style={[styles.navButton, styles.navButtonLeft]} 
          onPress={() => navigation.goBack('Recomendations')}>
          <Text style={styles.navButtonText}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.navButton, styles.navButtonRight]} 
          onPress={() => navigation.navigate('FairTrade')}>
          <Text style={styles.navButtonText}>→</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  description: {
    color: Color.white,
    fontFamily: FontFamily.ralewayMedium,
    fontSize: FontSize.size_xl,
    marginBottom: 40,
    textAlign: 'center',
  },
  navButton: {
    position: 'absolute',
    bottom: 40,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Button background opacity
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
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
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 40, 50, 0.4)', // Adjust opacity here
  },
  title: {
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.sonder,
    color: Color.white,
    textAlign: 'center',
    marginTop: 50, // Push the title upwards
    marginBottom: 20,
  },
});

export default EthicalGadgets;
