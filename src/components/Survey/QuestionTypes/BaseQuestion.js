import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useSurvey } from 'context/SurveyContext';
import { Color, FontFamily, FontSize, Padding, Border } from 'GlobalStyles';

const BaseQuestion = ({ question, isRequired, error, children }) => {
  const { currentQuestionIndex } = useSurvey();

  return (
    <View style={styles.container}>
      {question.category && (
        <Text style={styles.category}>{question.category}</Text>
      )}
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

BaseQuestion.propTypes = {
  question: PropTypes.shape({
    category: PropTypes.string,
    question: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
  isRequired: PropTypes.bool,
  error: PropTypes.string,
  children: PropTypes.node,
};

BaseQuestion.defaultProps = {
  isRequired: false,
  error: null,
  children: null,
};

const styles = StyleSheet.create({
  category: {
    color: Color.primary,
    fontFamily: FontFamily.ralewayMedium,
    fontSize: FontSize.size_sm,
    marginBottom: Padding.p_sm,
    textTransform: 'uppercase',
  },
  container: {
    backgroundColor: Color.white,
    borderRadius: Border.br_md,
    elevation: 3,
    marginBottom: Padding.p_base,
    padding: Padding.p_base,
    shadowColor: Color.b2B2B,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  description: {
    color: Color.textSecondary,
    fontFamily: FontFamily.ralewayRegular,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    marginBottom: Padding.p_base,
  },
  error: {
    color: Color.error,
    fontFamily: FontFamily.ralewayRegular,
    fontSize: FontSize.size_sm,
    marginTop: Padding.p_5xs,
  },
  question: {
    color: Color.textPrimary,
    fontFamily: FontFamily.ralewayBold,
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    marginBottom: question => question.description ? Padding.p_5xs : Padding.p_sm,
  },
  required: {
    color: Color.error,
    fontSize: FontSize.size_lg,
  },
});

export default BaseQuestion;