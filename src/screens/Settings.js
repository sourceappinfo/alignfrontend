import React from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily, FontSize } from 'GlobalStyles';

// Placeholder image
const backgroundImage = require('assets/settings_background.jpg');  // Replace with actual image file

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
        {/* Light Overlay */}
        <View style={styles.overlay} />

        <View style={styles.content}>
          <Text style={styles.title}>Settings</Text>
          <Text style={styles.description}>Manage your account settings here.</Text>

          {/* Settings Options */}
          <View style={styles.settingsOptions}>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionText}>Account Information</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionText}>Privacy Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionText}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionText}>Language</Text>
            </TouchableOpacity>
          </View>

          {/* Navigation Buttons */}
          <View style={styles.navigation}>
            <TouchableOpacity style={styles.navButtonLeft} onPress={() => navigation.goBack()}>
              <Text style={styles.navButtonText}>← Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButtonRight} onPress={() => navigation.navigate('Recommendations')}>
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
    paddingHorizontal: 20,
  },
  description: {
    color: Color.white,
    fontFamily: FontFamily.ralewayMedium,
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  navButtonLeft: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    marginRight: 20,
    padding: 10,
  },
  navButtonRight: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    marginLeft: 20,
    padding: 10,
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
  optionButton: {
    alignItems: 'center',
    backgroundColor: Color.primary,
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
  },
  optionText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayMedium,
    fontSize: FontSize.size_md,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',  // 30% opacity
  },
  settingsOptions: {
    marginBottom: 40,
    width: '100%',
  },
  title: {
    color: Color.white,
    fontFamily: FontFamily.ralewayBold,
    fontSize: 30,
    marginBottom: 20,
  },
});

export default Settings;
