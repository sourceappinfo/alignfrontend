import React from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontSize, FontFamily, Color } from 'GlobalStyles';

const backgroundImage = require('assets/fair-trade-background.jpg'); // Placeholder image

const FairTrade = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
        {/* Light Overlay */}
        <View style={styles.overlay} />

        {/* Content */}
        <View style={styles.content}>
          {/* Title centered at the top */}
          <Text style={styles.title}>Fair Trade Goods</Text>
          
          {/* Description */}
          <Text style={styles.description}>
            Products ethically sourced and fairly traded to support communities around the world.
          </Text>

          {/* Navigation Buttons */}
          <TouchableOpacity 
            style={[styles.navButton, styles.navButtonLeft]} 
            onPress={() => navigation.goBack('Recomendations')}>
            <Text style={styles.navButtonText}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.navButton, styles.navButtonRight]} 
            onPress={() => navigation.navigate('HumanRights')}>
            <Text style={styles.navButtonText}>→</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: { 
    flex: 1, 
  },
  container: { 
    flex: 1, 
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  description: {
    color: Color.white,
    fontFamily: FontFamily.ralewayMedium,
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  navButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    bottom: 40,
    elevation: 5,
    height: 40,
    justifyContent: 'center',
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 40,
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
    backgroundColor: 'rgba(0, 40, 50, 0.3)', // 30% opacity for background
  },
  title: {
    fontSize: 40,
    fontFamily: FontFamily.ralewayExtraBold,
    color: Color.white,
    textAlign: 'center',
    marginTop: 50, // Adjust the margin to push the title toward the top
    marginBottom: 20,
  },
});

export default FairTrade;
