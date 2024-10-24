import React from "react";
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily } from "GlobalStyles";

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
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 40, 50, 0.3)', // 30% opacity
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: FontFamily.ralewayBold,
    marginBottom: 10,
    color: Color.white,
  },
  description: {
    fontSize: 16,
    fontFamily: FontFamily.ralewayMedium,
    marginBottom: 20,
    textAlign: 'center',
    color: Color.white,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: Color.primary,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayBold,
  },
  navigation: {
    flexDirection: 'row',
    marginTop: 30,
  },
  navButtonLeft: {
    marginRight: 20,
  },
  navButtonRight: {
    marginLeft: 20,
  },
  navButtonText: {
    fontSize: 16,
    color: Color.primary,
    fontFamily: FontFamily.ralewayBold,
  },
});

export default Favorites;
