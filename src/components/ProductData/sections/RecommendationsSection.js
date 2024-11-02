// src/components/ProductData/sections/RecommendationsSection.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { FontFamily, Color, FontSize } from 'GlobalStyles';

const RecommendationsSection = ({ recommendations }) => {
  const renderRecommendation = ({ item }) => (
    <View style={styles.recommendationCard}>
      <Text style={styles.companyName}>{item.companyName}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommendations</Text>
      <FlatList
        data={recommendations}
        renderItem={renderRecommendation}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  companyName: {
    color: Color.secondary,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_md,
  },
  container: {
    backgroundColor: Color.white,
    borderRadius: 10,
    marginVertical: 8,
    padding: 16,
  },
  description: {
    color: Color.text,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
  },
  listContent: {
    paddingVertical: 8,
  },
  recommendationCard: {
    backgroundColor: Color.lightBackground,
    borderRadius: 8,
    marginBottom: 8,
    padding: 12,
  },
  title: {
    color: Color.primary,
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_lg,
    marginBottom: 8,
  },
});

export default RecommendationsSection;
