import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import BaseQuestion from 'components/Survey/QuestionTypes/BaseQuestion';
import { Color, Padding, Border, FontFamily, FontSize } from 'GlobalStyles';
import { SingleSelectQuestionPropTypes } from 'constants/propTypes';

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
  option: {
    borderColor: Color.n400,
    borderRadius: Border.br_sm,
    borderWidth: 1,
    padding: Padding.p_md,
  },
  optionText: {
    color: Color.textPrimary,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.paragraphRegular_size,
  },
  optionsContainer: {
    flexDirection: 'column',
    gap: Padding.p_sm,
  },
  selectedOption: {
    backgroundColor: Color.optionBackground,
    borderColor: Color.primary,
  },
  selectedOptionText: {
    color: Color.primary,
  },
});

export default SingleSelectQuestion;
