import React from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontSize, FontFamily, Color } from 'GlobalStyles';

const backgroundImage = require('assets/green-tech-background.jpg'); // Placeholder image

const GreenTech = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
        {/* Light Overlay */}
        <View style={styles.overlay} />

        <View style={styles.content}>
          <Text style={styles.title}>GreenTech</Text>
          <Text style={styles.description}>
            Leading innovations in renewable energy, aiming for a sustainable future with cutting-edge technology.
          </Text>

          {/* Navigation Buttons */}
          <View style={styles.navigation}>
            <TouchableOpacity style={styles.navButtonLeft} onPress={() => navigation.goBack('EcoFashion')}>
              <Text style={styles.navButtonText}>← Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButtonRight} onPress={() => navigation.navigate('FairTrade')}>
              <Text style={styles.navButtonText}>Next →</Text>
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
  navButtonLeft: {
    marginRight: 20,
  },
  navButtonRight: {
    marginLeft: 20,
  },
  navButtonText: {
    color: Color.white,
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
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default GreenTech;
