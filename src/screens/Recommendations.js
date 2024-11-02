// src/screens/Recommendations.js
import React, { useContext, useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, FlatList, Image, ImageBackground, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { SurveyContext } from 'context/SurveyContext'; // Adjusted for Babel alias
import { useRecommendations } from 'hooks/useRecommendations'; // Adjusted for Babel alias
import { Color, FontFamily } from 'GlobalStyles'; // Adjusted for Babel alias

// Categories for filtering
const categories = ['All', 'Sustainability', 'Innovation', 'Fair Trade', 'Human Rights', 'Ethical Practices'];

const Recommendations = () => {
  const navigation = useNavigation();
  const { responses } = useContext(SurveyContext);
  const { recommendations, loading, error, fetchRecommendations } = useRecommendations();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Fetch recommendations based on survey responses
  useEffect(() => {
    if (responses) {
      fetchRecommendations(responses);
    }
  }, [responses]);

  // Filtered recommendations by category
  const filteredRecommendations = selectedCategory === 'All'
    ? recommendations
    : recommendations.filter(item => item.category === selectedCategory);

  const renderRecommendation = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
      <View style={styles.card}>
        <Image source={item.image} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.company}</Text>
          <Text style={styles.cardCategory}>{item.category}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
          <TouchableOpacity style={styles.likeButton}>
            <Text style={styles.likeButtonText}>⭐</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator size="large" color={Color.primary} />;
  }

  if (error) {
    return <Text style={styles.errorText}>Error loading recommendations.</Text>;
  }

  return (
    <ImageBackground
      source={require('../assets/recommendations-background.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Recommendations</Text>
          <Text style={styles.description}>Tailored company and product suggestions based on your values.</Text>
        </View>

        {/* Category Filter */}
        <View style={styles.filterContainer}>
          <Text style={styles.filterText}>Filter by Category:</Text>
          <Picker
            selectedValue={selectedCategory}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          >
            {categories.map((category) => (
              <Picker.Item label={category} value={category} key={category} />
            ))}
          </Picker>
        </View>

        {/* Recommendation List */}
        <FlatList
          data={filteredRecommendations}
          renderItem={renderRecommendation}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />

        {/* Navigation Buttons */}
        <View style={styles.navigation}>
          <TouchableOpacity
            style={[styles.navButton, styles.navButtonLeft]}
            onPress={() => navigation.goBack()}>
            <Text style={styles.navButtonText}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navButton, styles.navButtonRight]}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.navButtonText}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    elevation: 5,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardCategory: {
    color: Color.primary,
    fontFamily: FontFamily.ralewayMedium,
    fontSize: 14,
    marginBottom: 5,
  },
  cardContent: {
    padding: 15,
  },
  cardDescription: {
    color: Color.gray,
    fontFamily: FontFamily.ralewayMedium,
    fontSize: 14,
  },
  cardImage: {
    height: 120,
    width: '100%',
  },
  cardTitle: {
    color: Color.black,
    fontFamily: FontFamily.ralewayBold,
    fontSize: 20,
    marginBottom: 5,
  },
  container: {
    backgroundColor: 'transparent',
    flex: 1,
    paddingHorizontal: 20,
  },
  description: {
    color: Color.gray,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: 16,
    paddingHorizontal: 30,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontFamily: FontFamily.poppinsMedium,
    padding: 20,
    textAlign: 'center',
  },
  filterContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  filterText: {
    color: Color.white,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: 16,
  },
  header: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 60,
  },
  likeButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#f1c40f',
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  likeButtonText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayBold,
    fontSize: 16,
  },
  list: {
    paddingVertical: 20,
  },
  navButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
    elevation: 5,
    height: 40,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: 40,
  },
  navButtonLeft: {
    marginRight: 20,
  },
  navButtonRight: {
    marginLeft: 20,
  },
  navButtonText: {
    color: Color.primary,
    fontFamily: FontFamily.ralewayBold,
    fontSize: 24,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  picker: {
    height: 50,
    width: 150,
  },
  title: {
    color: Color.white,
    fontFamily: FontFamily.sonder,
    fontSize: 36,
    marginBottom: 10,
  },
});

export default Recommendations;
