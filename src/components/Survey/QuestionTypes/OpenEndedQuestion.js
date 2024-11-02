import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import BaseQuestion from 'components/Survey/QuestionTypes/BaseQuestion';
import { Color, Padding, Border, FontFamily, FontSize } from 'GlobalStyles';
import { OpenEndedQuestionPropTypes } from 'constants/propTypes';

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
        placeholderTextColor={Color.textSecondary}
      />
    </BaseQuestion>
  );
};

OpenEndedQuestion.propTypes = {
  question: PropTypes.shape(OpenEndedQuestionPropTypes).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

OpenEndedQuestion.defaultProps = {
  value: '',
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: Color.white,
    borderColor: Color.n400,
    borderRadius: Border.br_sm,
    borderWidth: 1,
    color: Color.textPrimary,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.paragraphRegular_size,
    height: 100,
    padding: Padding.p_sm,
    textAlignVertical: 'top',
  },
});

export default OpenEndedQuestion;