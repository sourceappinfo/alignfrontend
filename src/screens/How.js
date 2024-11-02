import * as React from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Color, FontFamily, FontSize } from 'GlobalStyles';
import { useNavigation } from '@react-navigation/native';

const backgroundImage = require('assets/howgreenpic.jpg');

const How = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={backgroundImage} 
        style={styles.backgroundImage} 
        resizeMode="cover"
        imageStyle={styles.imageStyle} // Adjust image style for stretching
      >
        {/* Light Overlay */}
        <View style={styles.overlay} />

        <View style={styles.how}>
          {/* HOW Title */}
          <Text style={styles.howTitle}>HOW</Text>
          
          {/* Scoring System Text */}
          <View style={styles.scoringSystemContainer}>
            <Text style={styles.scoringSystemText}>Our scoring system</Text>
            <Text style={styles.scoringSystemText}>focuses on</Text>
            <Text style={styles.scoringSystemText}>Three Pillars:</Text>
          </View>

          {/* Three Pillars */}
          <Text style={styles.pillarText}>Climate Impact</Text>
          <Text style={styles.pillarText}>Labor Practices</Text>
          <Text style={styles.pillarText}>Corporate Social Responsibility</Text>

          {/* Navigation Buttons */}
          <TouchableOpacity 
            style={[styles.navButton, styles.navButtonLeft]}
            onPress={() => navigation.navigate('Intro')}
          >
            <Text style={styles.navButtonText}>←</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.navButton, styles.navButtonRight]}
            onPress={() => navigation.navigate('Environment')}
          >
            <Text style={styles.navButtonText}>→</Text>
          </TouchableOpacity>
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
  imageStyle: {
    height: '120%', // Stretch the image vertically
  },
  // Light overlay with opacity
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 40, 50, .2)', // Light overlay with 20% opacity
  },
  how: {
    flex: 1,
    paddingHorizontal: 30, 
    paddingTop: 100, 
  },
  howTitle: {
    color: Color.white, 
    fontFamily: FontFamily.sonder, 
    fontSize: 90, 
    marginBottom: 40, 
    textAlign: 'center', 
  },
  scoringSystemContainer: {
    marginBottom: 40, 
  },
  scoringSystemText: {
    color: Color.white, 
    fontFamily: FontFamily.poppinsMedium, 
    fontSize: 35, 
  },
  pillarText: {
    alignItems: 'center', 
    color: Color.white, 
    fontFamily: FontFamily.reenieBeanie, 
    fontSize: 60, 
    lineHeight: 60,
    marginBottom: 60, // Center the pillar text horizontally
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
});

export default How;
