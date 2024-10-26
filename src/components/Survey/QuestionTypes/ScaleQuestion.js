import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import PropTypes from 'prop-types';
import BaseQuestion from './BaseQuestion';
import { Theme } from '../../../config/theme';
import { ScaleQuestionPropTypes } from '../../../constants/propTypes';

const ScaleQuestion = ({ question, value, onChange }) => {
  return (
    <BaseQuestion question={question} isRequired={question.required}>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={5}
          step={1}
          value={value}
          onValueChange={onChange}
          minimumTrackTintColor={Theme.colors.primary}
          maximumTrackTintColor={Theme.colors.border}
        />
        <View style={styles.labels}>
          {question.options.map((option) => (
            <Text
              key={option.value}
              style={[
                styles.label,
                value === option.value && styles.selectedLabel,
              ]}
            >
              {option.label}
            </Text>
          ))}
        </View>
      </View>
    </BaseQuestion>
  );
};

ScaleQuestion.propTypes = {
  question: PropTypes.shape(ScaleQuestionPropTypes).isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  sliderContainer: {
    marginTop: Theme.spacing.md,
  },
  slider: {
    height: 40,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Theme.spacing.sm,
  },
  label: {
    fontSize: 12,
    color: Theme.colors.secondary,
    textAlign: 'center',
    flex: 1,
  },
  selectedLabel: {
    color: Theme.colors.primary,
    fontFamily: Theme.fonts.medium,
  },
});

export default ScaleQuestion;
