import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import BaseQuestion from './BaseQuestion';
import { Theme } from '../../../config/theme';
import { MultiSelectQuestionPropTypes } from '../../../constants/propTypes';

const MultiSelectQuestion = ({ question, value = [], onChange }) => {
  const handleSelect = (optionValue) => {
    const newValue = value.includes(optionValue)
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue];
    
    if (question.maxSelections && newValue.length > question.maxSelections) {
      return;
    }
    
    onChange(newValue);
  };

  return (
    <BaseQuestion question={question} isRequired={question.required}>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.option,
              value.includes(option.value) && styles.selectedOption,
            ]}
            onPress={() => handleSelect(option.value)}
          >
            <Text
              style={[
                styles.optionText,
                value.includes(option.value) && styles.selectedOptionText,
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

MultiSelectQuestion.propTypes = {
  question: PropTypes.shape(MultiSelectQuestionPropTypes).isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
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

export default MultiSelectQuestion;
