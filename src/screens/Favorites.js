import React from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily } from 'GlobalStyles';

// Placeholder image
const backgroundImage = require('assets/favorites_background.jpg');

const Favorites = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
        {/* Light Overlay */}
        <View style={styles.overlay} />

        <View style={styles.content}>
          <Text style={styles.title}>Favorites</Text>
          <Text style={styles.description}>Your favorite companies will appear here.</Text>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProductData')}>
            <Text style={styles.buttonText}>Browse Products</Text>
          </TouchableOpacity>

          <View style={styles.navigation}>
            <TouchableOpacity style={styles.navButtonLeft} onPress={() => navigation.goBack()}>
              <Text style={styles.navButtonText}>← Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButtonRight} onPress={() => navigation.navigate('Notifications')}>
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
  navButtonRight: {
    marginLeft: 20,
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

export default Favorites;
