import React, { useState } from 'react';
import { 
  Text, 
  StyleSheet, 
  TextInput, 
  View, 
  ScrollView, 
  ImageBackground, 
  StatusBar,
  TouchableOpacity, 
  ActivityIndicator,
  Alert,
} from 'react-native';
import { FontFamily, Color, Border, Padding } from 'GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { search } from '../services/api'; // Adjust path if needed

const backgroundImage = require('assets/givingsearch.jpg');

const Search = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) {
      Alert.alert('Please enter a search term');
      return;
    }

    setLoading(true);
    try {
      const response = await search.query(query);
      setResults(response.data); // Assuming response data structure aligns with response.data
    } catch (error) {
      Alert.alert('Search Failed', 'An error occurred during the search.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
      
      <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
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
              value={query}
              onChangeText={setQuery}
              onSubmitEditing={handleSearch}
            />

            <TouchableOpacity 
              style={styles.scanIconContainer} 
              onPress={() => navigation.navigate('ScanItem')}
            >
              <FontAwesome5 name="camera" size={20} color={Color.gray} />
            </TouchableOpacity>
          </View>

          {/* Search Results */}
          {loading ? (
            <ActivityIndicator size="large" color={Color.white} />
          ) : (
            results.length > 0 ? (
              <View style={styles.resultsContainer}>
                {results.map((result, index) => (
                  <Text key={index} style={styles.resultText}>
                    {result.name} {/* Adjust based on result properties */}
                  </Text>
                ))}
              </View>
            ) : (
              <Text style={styles.noResultsText}>No results found.</Text>
            )
          )}

        </ScrollView>

        {/* Navigation Buttons */}
        <TouchableOpacity 
          style={[styles.navButton, styles.navButtonLeft]}
          onPress={() => navigation.navigate('RegisterAccount')}
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  titleContainer: {
    position: 'absolute',
    top: 290,
    width: '100%',
    alignItems: 'center',
  },
  searchTitle: {
    color: Color.white,
    fontFamily: FontFamily.sonder,
    fontSize: 70,
    lineHeight: 68,
    textAlign: 'center',
  },
  searchContainer: {
    marginTop: 390,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
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
    width: 320,
  },
  scanIconContainer: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  resultsContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  resultText: {
    color: Color.white,
    fontSize: 16,
    marginVertical: 5,
    fontFamily: FontFamily.ralewaylight,
  },
  noResultsText: {
    color: Color.white,
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
    fontFamily: FontFamily.ralewaylight,
  },
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
