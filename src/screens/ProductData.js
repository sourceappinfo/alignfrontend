import React from 'react';
import { 
  Text, 
  StyleSheet, 
  TextInput, 
  View, 
  ScrollView, 
  ImageBackground, 
  StatusBar,
  TouchableOpacity, 
} from 'react-native';
import { FontFamily, Color, Border, Padding } from 'GlobalStyles';
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
    height: '100%',
    width: '100%',
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
    color: Color.white,
    fontFamily: FontFamily.sonder,
    fontSize: 70,
    lineHeight: 68,
    textAlign: 'center',
  },
  searchContainer: {
    marginTop: 390, // Separating search bar from title
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',  // Allows the icon to appear next to the search bar
    justifyContent: 'center',
  },
  searchButton: {
    alignItems: 'center',
    backgroundColor: Color.white,
    borderRadius: Border.br_sm,
    elevation: 4,
    flexDirection: 'row',
    height: 62,
    paddingLeft: Padding.p_sm,
    paddingRight: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    width: 320,
  },
  scanIconContainer: {
    position: 'absolute',
    right: 20,  // Adjust to position the icon within the search bar area
    top: 10,
  },
  // Navigation button styles
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
    left: 30,
  },
  navButtonRight: {
    right: 30,
  },
  navButtonText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: 20,
  },
});

export default Search;
