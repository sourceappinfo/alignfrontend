import React from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily } from 'GlobalStyles';

// Placeholder image for background
const backgroundImage = require('assets/human-rights-background.jpg');

const HumanRights = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
        {/* Light Overlay */}
        <View style={styles.overlay} />

        <View style={styles.content}>
          {/* Title */}
          <Text style={styles.title}>Human Rights</Text>
          
          {/* Description */}
          <Text style={styles.description}>
            Information about company human rights practices and policies.
          </Text>

          {/* Navigation Buttons */}
          <TouchableOpacity 
            style={[styles.navButton, styles.navButtonLeft]}
            onPress={() => navigation.navigate('Recommendations')}
          >
            <Text style={styles.navButtonText}>←</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.navButton, styles.navButtonRight]}
            onPress={() => navigation.navigate('EthicalGadgets')}
          >
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
    fontFamily: FontFamily.poppinsMedium,
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
    backgroundColor: 'rgba(0, 40, 50, 0.3)', // 30% opacity
  },
  title: {
    color: Color.white,
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HumanRights;
