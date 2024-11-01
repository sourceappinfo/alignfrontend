import React from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily } from 'GlobalStyles';

// Placeholder image
const backgroundImage = require('assets/notifications_background.jpg');

const Notifications = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
        {/* Light Overlay */}
        <View style={styles.overlay} />

        <View style={styles.content}>
          <Text style={styles.title}>Notifications</Text>
          <Text style={styles.description}>You have no new notifications at the moment.</Text>
        </View>

        {/* Navigation Buttons - aligned to the bottom */}
        <View style={styles.navigation}>
          <TouchableOpacity style={[styles.navButton, styles.navButtonLeft]} onPress={() => navigation.goBack()}>
            <Text style={styles.navButtonText}>← Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navButton, styles.navButtonRight]} onPress={() => navigation.navigate('Settings')}>
            <Text style={styles.navButtonText}>Next →</Text>
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
    marginTop: 100,
    paddingHorizontal: 20, // Pushing content down to make room for the title
  },
  description: {
    color: Color.white,
    fontFamily: FontFamily.ralewayMedium,
    fontSize: 18,
    marginBottom: 30,
    marginTop: 10,
    textAlign: 'center',
  },
  navButton: {
    backgroundColor: Color.primary,
    borderRadius: 10,
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
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
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 30, // Positioning buttons at the bottom
    left: 20,
    right: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 40, 50, 0.4)', // 40% opacity for better contrast
  },
  title: {
    fontSize: 34,
    fontFamily: FontFamily.sonder, // Using the same font for consistency
    color: Color.white,
    marginBottom: 10,
    textAlign: 'center',
    position: 'absolute',
    top: 50, // Positioning the title towards the top center
  },
});

export default Notifications;
