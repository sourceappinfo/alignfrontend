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
  container: {
    padding: 16,
    backgroundColor: Color.white,
    borderRadius: 10,
    marginVertical: 8,
  },
  title: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsBold,
    color: Color.primary,
    marginBottom: 8,
  },
  recommendationCard: {
    backgroundColor: Color.lightBackground,
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  companyName: {
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.secondary,
  },
  description: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.text,
  },
  listContent: {
    paddingVertical: 8,
  },
});

export default RecommendationsSection;
