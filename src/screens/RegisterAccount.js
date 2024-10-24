import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity } from "react-native";
import { Color, FontFamily } from "GlobalStyles";
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
          <Text style={styles.alignText}>{`ALIGN.`}</Text>
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
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 20, 0.20)',
  },
  safeArea: {
    flex: 1,
    justifyContent: "space-between", 
    paddingBottom: 50, 
  },
  centerContent: {
    flex: 1,
    alignItems: "center",
    position: 'relative', 
  },
  alignText: {
    position: 'absolute',
    fontSize: 100,
    marginLeft: 20,
    lineHeight: 95,
    fontFamily: FontFamily.sonder,
    textAlign: "center",
    color: Color.white,
    width: '100%',
    top: '35%', 
  },
  consciousText: {
    position: 'absolute',
    fontSize: 28,
    lineHeight: 28,
    fontFamily: FontFamily.trispaceLight,
    textAlign: "center",
    color: Color.white,
    width: '100%',
    top: '48%', 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  textButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  textButtonText: {
    color: Color.white,
    fontSize: 16,
    fontFamily: FontFamily.ralewayMedium,
    textDecorationLine: 'underline',
  },
});

export default RegisterAccount;
