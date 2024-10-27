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
  subTitle: {
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.secondary,
    marginTop: 8,
  },
  text: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.text,
    marginBottom: 4,
  },
});

export default ReputationSection;
