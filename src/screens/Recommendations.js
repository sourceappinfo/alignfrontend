import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, FlatList, Image, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { Color, FontFamily } from "GlobalStyles";

// Sample recommendations with categories
const recommendationsData = [
  { id: '1', company: 'EcoFashion', category: 'Sustainability', description: 'Sustainable and eco-friendly clothing.', image: require('assets/eco-fashion.jpg'), screen: 'EcoFashion' },
  { id: '2', company: 'GreenTech', category: 'Innovation', description: 'Innovative renewable energy solutions.', image: require('assets/green-tech.jpg'), screen: 'GreenTech' },
  { id: '3', company: 'FairTrade Goods', category: 'Fair Trade', description: 'Ethically sourced and fair trade products.', image: require('assets/fair-trade.jpg'), screen: 'FairTrade' },
  { id: '4', company: 'HumanRights Corp', category: 'Human Rights', description: 'Committed to upholding human rights in every product.', image: require('assets/human-rights.jpg'), screen: 'HumanRights' },
  { id: '5', company: 'EthicalGadgets', category: 'Ethical Practices', description: 'Tech products built with transparency and ethical labor.', image: require('assets/ethical-tech.jpg'), screen: 'EthicalGadgets' },
];

const categories = ['All', 'Sustainability', 'Innovation', 'Fair Trade', 'Human Rights', 'Ethical Practices'];

const Recommendations = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredRecommendations = selectedCategory === 'All'
    ? recommendationsData
    : recommendationsData.filter(item => item.category === selectedCategory);

  const renderRecommendation = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
      <View style={styles.card}>
        <Image source={item.image} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.company}</Text>
          <Text style={styles.cardCategory}>{item.category}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
          {/* Add Like/Star button */}
          <TouchableOpacity style={styles.likeButton}>
            <Text style={styles.likeButtonText}>⭐</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('assets/recommendations-background.jpg')}
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Overlay with adjustable opacity
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Keeping the background transparent for overlay
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontFamily: FontFamily.sonder,
    color: Color.white,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.gray,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  filterText: {
    fontSize: 16,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.white,
  },
  picker: {
    height: 50,
    width: 150,
  },
  list: {
    paddingVertical: 20,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 120,
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: FontFamily.ralewayBold,
    color: Color.black,
    marginBottom: 5,
  },
  cardCategory: {
    fontSize: 14,
    fontFamily: FontFamily.ralewayMedium,
    color: Color.primary,
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    fontFamily: FontFamily.ralewayMedium,
    color: Color.gray,
  },
  likeButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
    backgroundColor: '#f1c40f',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  likeButtonText: {
    fontSize: 16,
    color: Color.white,
    fontFamily: FontFamily.ralewayBold,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  navButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  navButtonLeft: {
    marginRight: 20,
  },
  navButtonRight: {
    marginLeft: 20,
  },
  navButtonText: {
    color: Color.primary,
    fontSize: 24,
    fontFamily: FontFamily.ralewayBold,
  },
});

export default Recommendations;
