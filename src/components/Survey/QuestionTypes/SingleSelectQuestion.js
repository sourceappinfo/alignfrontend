import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import BaseQuestion from './BaseQuestion';
import { Theme } from '../../../config/theme';
import { SingleSelectQuestionPropTypes } from '../../../constants/propTypes';

const SingleSelectQuestion = ({ question, value, onChange }) => {
  const handlePress = (optionValue) => {
    onChange(optionValue);
  };

  return (
    <BaseQuestion question={question} isRequired={question.required}>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.option,
              value === option.value && styles.selectedOption,
            ]}
            onPress={() => handlePress(option.value)}
          >
            <Text
              style={[
                styles.optionText,
                value === option.value && styles.selectedOptionText,
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </BaseQuestion>
  );
};

SingleSelectQuestion.propTypes = {
  question: PropTypes.shape(SingleSelectQuestionPropTypes).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: 'column',
    gap: Theme.spacing.sm,
  },
  option: {
    padding: Theme.spacing.md,
    borderRadius: Theme.borderRadius.small,
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },
  selectedOption: {
    backgroundColor: Theme.colors.primaryLight,
    borderColor: Theme.colors.primary,
  },
  optionText: {
    fontSize: 16,
    color: Theme.colors.text,
    fontFamily: Theme.fonts.medium,
  },
  selectedOptionText: {
    color: Theme.colors.primary,
  },
});

export default SingleSelectQuestion;
