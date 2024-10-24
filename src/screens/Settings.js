import React from "react";
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily, FontSize } from "GlobalStyles";

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
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',  // 30% opacity
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: FontFamily.ralewayBold,
    color: Color.white,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    fontFamily: FontFamily.ralewayMedium,
    color: Color.white,
    marginBottom: 30,
    textAlign: 'center',
  },
  settingsOptions: {
    width: '100%',
    marginBottom: 40,
  },
  optionButton: {
    backgroundColor: Color.primary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  optionText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayMedium,
    fontSize: FontSize.size_md,
  },
  navigation: {
    flexDirection: 'row',
    marginTop: 30,
  },
  navButtonLeft: {
    marginRight: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 10,
    borderRadius: 20,
  },
  navButtonRight: {
    marginLeft: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 10,
    borderRadius: 20,
  },
  navButtonText: {
    fontSize: 16,
    color: Color.white,
    fontFamily: FontFamily.ralewayBold,
  },
});

export default Settings;
