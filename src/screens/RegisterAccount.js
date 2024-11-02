import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Color, FontFamily } from 'GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av'; // Import Video component

const videoSource = require('assets/frontvideopage.mp4'); // Replace this with your video file

const RegisterAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Video Background */}
      <Video
        source={videoSource}
        style={styles.background}
        shouldPlay
        isLooping
        resizeMode="cover"
        isMuted
      />

      {/* Overlay to darken the video */}
      <View style={styles.overlay} />

      <SafeAreaView style={styles.safeArea}>
        {/* Main Content */}
        <View style={styles.centerContent}>
          <Text style={styles.alignText}>{'ALIGN.'}</Text>
          <Text style={styles.consciousText}>Conscious Consumption</Text>
        </View>

        {/* Navigation Buttons Container */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.textButton} 
            activeOpacity={0.6} 
            onPress={() => navigation.navigate('Search')}
          >
            <Text style={styles.textButtonText}>Search</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.textButton} 
            activeOpacity={0.6} 
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.textButtonText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.textButton} 
            activeOpacity={0.6} 
            onPress={() => navigation.navigate('Intro')}
          >
            <Text style={styles.textButtonText}>How</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  alignText: {
    color: Color.white,
    fontFamily: FontFamily.sonder,
    fontSize: 100,
    lineHeight: 95,
    marginLeft: 20,
    position: 'absolute',
    textAlign: 'center',
    top: '35%',
    width: '100%', 
  },
  background: {
    bottom: 0,
    height: '100%',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    width: '100%',
  },
  centerContent: {
    alignItems: 'center',
    flex: 1,
    position: 'relative', 
  },
  consciousText: {
    color: Color.white,
    fontFamily: FontFamily.trispaceLight,
    fontSize: 28,
    lineHeight: 28,
    position: 'absolute',
    textAlign: 'center',
    top: '48%',
    width: '100%', 
  },
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 20, 0.20)',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between', 
    paddingBottom: 50, 
  },
  textButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  textButtonText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayMedium,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default RegisterAccount;
