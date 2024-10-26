import React from "react";
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FontSize, FontFamily, Color } from "GlobalStyles";

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
  container: { 
    flex: 1 
  },
  backgroundImage: { 
    flex: 1 
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 40, 50, 0.3)', // 30% opacity for background
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 40,
    fontFamily: FontFamily.ralewayExtraBold,
    color: Color.white,
    textAlign: 'center',
    marginTop: 50, // Adjust the margin to push the title toward the top
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    fontFamily: FontFamily.ralewayMedium,
    color: Color.white,
    textAlign: 'center',
    marginBottom: 30,
  },
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
    fontSize: 20,
    fontFamily: FontFamily.ralewayExtraBold,
  },
});

export default FairTrade;
