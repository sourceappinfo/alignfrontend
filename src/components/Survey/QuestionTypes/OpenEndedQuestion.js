import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import BaseQuestion from './BaseQuestion';
import { Theme } from '../../../config/theme';
import { OpenEndedQuestionPropTypes } from '../../../constants/propTypes';

const OpenEndedQuestion = ({ question, value, onChange }) => {
  return (
    <BaseQuestion question={question} isRequired={question.required}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder={question.placeholder || 'Type your answer here...'}
        maxLength={question.maxLength || 250}
        multiline
      />
    </BaseQuestion>
  );
};

OpenEndedQuestion.propTypes = {
  question: PropTypes.shape(OpenEndedQuestionPropTypes).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  input: {
    height: 100,
    padding: Theme.spacing.sm,
    borderRadius: Theme.borderRadius.small,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    backgroundColor: Theme.colors.surface,
    color: Theme.colors.text,
    fontSize: 16,
    fontFamily: Theme.fonts.regular,
  },
});

export default OpenEndedQuestion;
