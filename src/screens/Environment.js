import * as React from "react";
import { Text, StyleSheet, View, ScrollView, ImageBackground } from "react-native";
import { Color, FontFamily, FontSize } from 'GlobalStyles'; // GlobalStyles without 'src' because of the alias
import SwipeableScreenWrapper from 'components/SwipeableScreenWrapper'; // Using alias without 'src'

// Import your image here
const backgroundImage = require('assets/climateback.jpg'); // Correct alias path for assets

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
            <View style={styles.listContainer}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listItem}>Emissions</Text>
            </View>
            <View style={styles.listContainer}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listItem}>Waste Management</Text>
            </View>
            <View style={styles.listContainer}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listItem}>Sustainable Materials</Text>
            </View>
          </View>
        </ScrollView>
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
    backgroundColor: 'rgba(0, 0, 0, 0.55)', // Semi-transparent black with 30% opacity
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
    marginTop: 20,
    marginBottom: 20, // Space between title and content
  },
  thisAssessesThe: {
    fontSize: FontSize.size_16xl,
    fontFamily: FontFamily.maliMedium,
    color: Color.white,
    lineHeight: 45, // Line height for better readability
    marginBottom: 20, // Space between paragraph and list items
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Space between each list item
  },
  listItem: {
    fontSize: 64,
    fontFamily: FontFamily.reenieBeanie,
    color: Color.white,
    lineHeight: 65, // Increase line height for better spacing
    marginBottom: 10, // Space between paragraph and list items
  },
  environment: {
    paddingTop: 60, // Padding at the top of the screen for content
  },
});

export default Environment;
