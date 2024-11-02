import * as React from 'react';
import { Text, StyleSheet, View, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import SwipeableScreenWrapper from 'components/SwipeableScreenWrapper';  // Using 'components' alias
import { Color, FontSize, FontFamily, Border } from 'GlobalStyles';  // Using 'GlobalStyles' alias

const Labor = ({ navigation }) => {
  return (
    <SwipeableScreenWrapper
      onSwipeLeft={() => navigation.navigate('Environment')}  // Navigates to Corporate Governance
      onSwipeRight={() => navigation.navigate('CorporateGovernance')}  // Replace 'PreviousScreen' with the actual screen name
    >
      <ImageBackground
        source={require('assets/labor-background.jpg')}  // Using 'assets' alias for the image path
        style={styles.backgroundImage}
        imageStyle={styles.image}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.overlay}>
            <Text style={[styles.laborTitle, styles.laborText]}>
              LABOR
            </Text>
            <Text style={[styles.weEvaluateHow, styles.laborText]}>
              We evaluate how a company treats its workers and respects human rights
              throughout its supply chain. Fair wages, safe working conditions, and
              responsible sourcing are all crucial aspects.
            </Text>
          </View>
        </ScrollView>

        {/* Navigation Buttons */}
        <TouchableOpacity 
          style={[styles.navButton, styles.navButtonLeft]} 
          onPress={() => navigation.navigate('Environment')}  // Back button to previous screen
        >
          <Text style={styles.navButtonText}>←</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navButton, styles.navButtonRight]} 
          onPress={() => navigation.navigate('CorporateGovernance')}  // Next screen: Corporate Governance
        >
          <Text style={styles.navButtonText}>→</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SwipeableScreenWrapper>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
    right: -400,  // Adjusted to move the man further to the right
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',  // Centers the content within the scroll view
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 30, 0.4)',  // Semi-transparent dark overlay for better text readability
    justifyContent: 'center',
    paddingHorizontal: 20,  // Adds padding for text alignment
  },
  laborText: {
    color: Color.white,
    position: 'absolute',
    textAlign: 'left',
    transform: [
      {
        rotate: '-0.1deg',
      },
    ],
  },
  laborTitle: {
    fontFamily: FontFamily.sonder,
    fontSize: FontSize.size_77xl,
    lineHeight: 93,
    marginLeft: 20,
    marginTop: 40,
    textShadowColor: 'rgba(0, 0, 0, 0)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    top: 50,
    width: '90%',
  },
  weEvaluateHow: {
    fontFamily: FontFamily.poppinsMedium,
    fontSize: 31,
    lineHeight: 58,
    marginLeft: 20,
    marginTop: 22,
    textShadowColor: 'rgba(0, 0, 0, 0)', 
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    top: 180,
    width: '85%',
  },
  // Navigation Button styles
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
    left: 30,  // Positioning for the back button on the left
  },
  navButtonRight: {
    right: 30,  // Positioning for the forward button on the right
  },
  navButtonText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: 20,
  },
});

export default Labor;
