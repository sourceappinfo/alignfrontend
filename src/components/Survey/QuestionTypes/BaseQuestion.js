// src/components/Survey/QuestionTypes/BaseQuestion.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color, FontFamily } from '../../../GlobalStyles';

const BaseQuestion = ({ question, error, isRequired, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.category}>{question.category}</Text>
      <Text style={styles.question}>
        {question.question}
        {isRequired && <Text style={styles.required}> *</Text>}
      </Text>
      {question.description && (
        <Text style={styles.description}>{question.description}</Text>
      )}
      {children}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: Color.white,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  category: {
    fontSize: 14,
    color: Color.primary,
    marginBottom: 8,
    fontFamily: FontFamily.ralewayMedium,
  },
  question: {
    fontSize: 18,
    color: Color.textPrimary,
    marginBottom: 12,
    fontFamily: FontFamily.ralewayBold,
  },
  description: {
    fontSize: 14,
    color: Color.textSecondary,
    marginBottom: 16,
    fontFamily: FontFamily.ralewayRegular,
  },
  required: {
    color: Color.error,
  },
  error: {
    color: Color.error,
    fontSize: 14,
    marginTop: 8,
    fontFamily: FontFamily.ralewayRegular,
  },
});

export default BaseQuestion;