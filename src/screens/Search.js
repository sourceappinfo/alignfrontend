import React from "react";
import { 
  Text, 
  StyleSheet, 
  TextInput, 
  View, 
  ScrollView, 
  ImageBackground, 
  StatusBar,
  TouchableOpacity 
} from "react-native";
import { FontFamily, Color, Border, Padding } from "GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons'; // For the scan icon

const backgroundImage = require('assets/givingsearch.jpg');

const Search = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
      
      <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
        {/* Overlay */}
        <View style={styles.overlay} />

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          
          {/* Title container */}
          <View style={styles.titleContainer}>
            <Text style={styles.searchTitle}>SEARCH</Text>
          </View>
          
          {/* Search Bar container */}
          <View style={[styles.searchContainer, styles.searchBorder]}>
            <TextInput 
              style={styles.searchButton} 
              placeholder="Search..." 
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
            />

            {/* Scan Icon */}
            <TouchableOpacity 
              style={styles.scanIconContainer} 
              onPress={() => navigation.navigate('ScanItem')}
            >
              <FontAwesome5 name="camera" size={20} color={Color.gray} />
            </TouchableOpacity>
          </View>

        </ScrollView>

        {/* Navigation Buttons */}
        <TouchableOpacity 
          style={[styles.navButton, styles.navButtonLeft]}
          onPress={() => navigation.navigate('RegisterAccount')} // Navigate back to RegisterAccount page
        >
          <Text style={styles.navButtonText}>←</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navButton, styles.navButtonRight]}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.navButtonText}>→</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  // Added overlay style
  overlay: {
    ...StyleSheet.absoluteFillObject, // This ensures the overlay covers the entire screen
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay with 40% opacity
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  titleContainer: {
    position: 'absolute', // Make the title independent of scrollView positioning
    top: 290, // Adjust the vertical position of the title as needed
    width: '100%',
    alignItems: 'center', // Center horizontally
  },
  searchTitle: {
    fontSize: 70,
    lineHeight: 68,
    fontFamily: FontFamily.sonder,
    color: Color.white,
    textAlign: "center",
  },
  searchContainer: {
    marginTop: 390, // Separating search bar from title
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',  // Allows the icon to appear next to the search bar
    justifyContent: 'center'
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
    width: 320,
    height: 62,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Padding.p_sm,
    paddingRight: 10,
  },
  scanIconContainer: {
    position: 'absolute',
    right: 20,  // Adjust to position the icon within the search bar area
    top: 10,
  },
  // Navigation button styles
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
    left: 30,
  },
  navButtonRight: {
    right: 30,
  },
  navButtonText: {
    color: Color.white,
    fontSize: 20,
    fontFamily: FontFamily.ralewayExtraBold,
  },
});

export default Search;
