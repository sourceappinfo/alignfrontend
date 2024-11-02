// src/components/ProductData/sections/ReputationSection.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontFamily, Color, FontSize } from 'GlobalStyles';

const ReputationSection = ({ reputationData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reputation</Text>
      <Text style={styles.subTitle}>Public Perception:</Text>
      <Text style={styles.text}>{reputationData.publicPerception || 'Data not available'}</Text>

      <Text style={styles.subTitle}>Social Media Mentions:</Text>
      <Text style={styles.text}>{reputationData.socialMediaMentions || 'Data not available'}</Text>

      <Text style={styles.subTitle}>Customer Reviews:</Text>
      <Text style={styles.text}>{reputationData.customerReviews || 'Data not available'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    borderRadius: 10,
    marginVertical: 8,
    padding: 16,
  },
  subTitle: {
    color: Color.secondary,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_md,
    marginTop: 8,
  },
  text: {
    color: Color.text,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    marginBottom: 4,
  },
  title: {
    color: Color.primary,
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_lg,
    marginBottom: 8,
  },
});

export default ReputationSection;
