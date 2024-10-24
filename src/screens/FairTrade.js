import React from "react";
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily, FontSize, Border } from "GlobalStyles";

const backgroundImage = require('assets/fair-trade-background.jpg');

const FairTrade = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.title}>Fair Trade</Text>
          <Text style={styles.description}>
            Support ethical trading practices that ensure fair wages and treatment for workers worldwide.
          </Text>

          {/* Navigation Buttons */}
          <View style={styles.navigation}>
            <TouchableOpacity 
              style={[styles.navButton, styles.navButtonLeft]} 
              onPress={() => navigation.goBack()}>
              <Text style={styles.navButtonText}>← Back</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.navButton, styles.navButtonRight]} 
              onPress={() => navigation.navigate('HumanRights')}>
              <Text style={styles.navButtonText}>Next →</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 40, 60, 0.3)', // Adjustable opacity
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.ralewayExtraBold,
    color: Color.white,
    marginBottom: 10,
  },
  description: {
    fontSize: FontSize.paragraphRegular_size,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.white,
    textAlign: 'center',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  navButton: {
    width: 120,
    paddingVertical: 10,
    borderRadius: Border.br_xl,
    backgroundColor: Color.blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  navButtonLeft: {},
  navButtonRight: {},
  navButtonText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayBold,
    fontSize: FontSize.size_xl,
  },
});

export default FairTrade;
