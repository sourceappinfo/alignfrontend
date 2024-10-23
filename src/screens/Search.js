import React, { useRef } from "react";
import { Text, StyleSheet, TextInput, View, ScrollView, ImageBackground, StatusBar } from "react-native";
import { FontFamily, Color, Border, Padding } from "GlobalStyles";  // Corrected path based on Babel alias
import SwipeableScreenWrapper from 'components/SwipeableScreenWrapper';  // Corrected path based on Babel alias

// Ensure the correct path for your background image
const backgroundImage = require('assets/searchpic.jpg');  // Corrected path based on Babel alias

const Search = ({ navigation }) => {
  const scrollViewRef = useRef(null); // Reference for ScrollView

  return (
    <>
      {/* Ensure the status bar is hidden or transparent */}
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
      
      <SwipeableScreenWrapper
        onSwipeLeft={() => {
          console.log('Swiped left, navigating to Profile'); // Navigate to the next screen on swipe left
          navigation.navigate('Profile');
        }}
        onSwipeRight={() => {
          console.log('Swiped right, navigating to ProductData'); // Navigate to the previous screen on swipe right
          navigation.navigate('ProductData');
        }}
        simultaneousHandlers={scrollViewRef} // Enable scroll and swipe to work together
      >
        <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
          <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollViewContent}>
            <View style={[styles.search, styles.searchBorder]}>
              <Text style={styles.searchTitle}>SEARCH</Text>
              <TextInput style={[styles.searchButton, styles.searchBorder]} placeholder="Search..." />
            </View>
          </ScrollView>
        </ImageBackground>
      </SwipeableScreenWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%', // Ensure full width
    height: '100%', // Ensure full height
    position: 'absolute', // Ensure it fills the screen without gaps
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center', // Ensures content stays centered in the scroll view
  },
  searchTitle: {
    fontSize: 70,
    lineHeight: 68,
    fontFamily: FontFamily.sonder,
    color: Color.white,
    textAlign: "center",
    marginBottom: 20, // Add spacing between title and search button
  },
  searchButton: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_sm,
    backgroundColor: Color.white,
    width: 368,
    height: 62,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Padding.p_sm,
    paddingTop: Padding.p_sm,
    paddingRight: 43,
    paddingBottom: Padding.p_sm,
  },
  search: {
    padding: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Search;
