import * as React from "react";
import { Text, StyleSheet, View, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Border } from 'GlobalStyles'; // GlobalStyles without 'src' because of the alias
import SwipeableScreenWrapper from 'components/SwipeableScreenWrapper'; // Using alias without 'src'

// Import your image here
const backgroundImage = require('assets/climate-background.jpg'); // Correct alias path for assets

const Environment = ({ navigation }) => {
  return (
    <SwipeableScreenWrapper
      onSwipeLeft={() => navigation.navigate('NextScreen')}
      onSwipeRight={() => navigation.navigate('PreviousScreen')}
    >
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* This is the semi-transparent overlay to reduce exposure */}
        <View style={styles.overlay} />

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.environment}>
            <Text style={[styles.climate, styles.climateTransform]}>
              CLIMATE
            </Text>
            <Text style={[styles.thisAssessesThe, styles.climateTransform]}>
              {`This assesses the environmental footprint of a company's products and operations. We consider factors like:`}
            </Text>

            {/* Left-aligned and independent list items */}
            <View style={styles.leftAlignedListContainer}>
              <Text style={[styles.listItem, styles.customLineSpacing]}>Emissions</Text>
              <Text style={[styles.listItem, styles.customLineSpacing]}>Waste Management</Text>
              <Text style={[styles.listItem, styles.customLineSpacing]}>Sustainable Materials</Text>
            </View>
          </View>
        </ScrollView>

        {/* Back Button */}
        <TouchableOpacity 
          style={[styles.navButton, styles.navButtonLeft]}
          onPress={() => navigation.goBack()} // Function to go back
        >
          <Text style={styles.navButtonText}>←</Text>
        </TouchableOpacity>

        {/* Forward Button */}
        <TouchableOpacity 
          style={[styles.navButton, styles.navButtonRight]}
          onPress={() => navigation.navigate('Labor')} // Replace 'Profile' with the actual screen
        >
          <Text style={styles.navButtonText}>→</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SwipeableScreenWrapper>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // Ensures the image covers the whole screen
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers the entire screen
    backgroundColor: 'rgba(0, 40, 40, 0.5)', // Semi-transparent black with 30% opacity
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20, // Adjust padding for content inside the ScrollView
  },
  climateTransform: {
    transform: [
      {
        rotate: "-0.1deg",
      },
    ],
    textAlign: "left",
    color: Color.white,
  },
  climate: {
    fontSize: FontSize.size_77xl,
    fontFamily: FontFamily.sonder,
    color: Color.white,
    marginTop: 30,
    marginBottom: 25, // Space between title and content
  },
  thisAssessesThe: {
    fontSize: 31,
    fontFamily: FontFamily.poppinsMedium, 
    color: Color.white,
    lineHeight: 50, // Line height for better readability
    marginBottom: 30, // Space between paragraph and list items
    marginLeft: 0,
  },
  leftAlignedListContainer: {
    marginTop: 10, // Space between list and the text above
    marginLeft: 0, // Align items to the left
  },
  customLineSpacing: {
    lineHeight: 70, // Adjust line height for better spacing between the list items
    marginBottom: 35, // Space between each list item
  },
  listItem: {
    fontSize: 52.5,
    fontFamily: FontFamily.reenieBeanie,
    color: Color.white,
    textAlign: 'left', // Align text to the left
    marginLeft: 0,
  },
  environment: {
    paddingTop: 60, // Padding at the top of the screen for content
  },
  // Navigation Button styles
  navButton: {
    position: 'absolute',
    bottom: 40,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  navButtonLeft: {
    left: 30, // Positioning for the back button on the left
  },
  navButtonRight: {
    right: 30, // Positioning for the forward button on the right
  },
  navButtonText: {
    color: Color.white,
    fontSize: 20,
    fontFamily: FontFamily.ralewayExtraBold,
  },
});

export default Environment;
