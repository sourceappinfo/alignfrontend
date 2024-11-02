import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import PropTypes from 'prop-types';
import BaseQuestion from 'components/Survey/QuestionTypes/BaseQuestion';
import { Color, Padding, FontFamily, FontSize } from 'GlobalStyles';
import { ScaleQuestionPropTypes } from 'constants/propTypes';

const ScaleQuestion = ({ question, value, onChange }) => {
  const renderScale = () => {
    return Array.from({ length: 5 }, (_, index) => index + 1).map((num) => (
      <Text
        key={num}
        style={[
          styles.scaleNumber,
          value === num && styles.selectedScaleNumber,
        ]}
      >
        {num}
      </Text>
    ));
  };

  return (
    <BaseQuestion question={question} isRequired={question.required}>
      <View style={styles.container}>
        <View style={styles.scaleContainer}>
          {renderScale()}
        </View>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={5}
          step={1}
          value={value}
          onValueChange={onChange}
          minimumTrackTintColor={Color.primary}
          maximumTrackTintColor={Color.n400}
          thumbTintColor={Color.primary}
        />
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>Not at all</Text>
          <Text style={styles.labelText}>Very much</Text>
        </View>
      </View>
    </BaseQuestion>
  );
};

ScaleQuestion.propTypes = {
  question: PropTypes.shape(ScaleQuestionPropTypes).isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

ScaleQuestion.defaultProps = {
  value: 3,
};

const styles = StyleSheet.create({
  container: {
    marginTop: Padding.p_md,
    width: '100%',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_sm,
  },
  labelText: {
    color: Color.textSecondary,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
  },
  scaleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Padding.p_sm,
    paddingHorizontal: Padding.p_sm,
  },
  scaleNumber: {
    color: Color.textSecondary,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_lg,
    textAlign: 'center',
    width: 30,
  },
  selectedScaleNumber: {
    color: Color.primary,
    fontFamily: FontFamily.poppinsMedium,
  },
  slider: {
    height: 40,
    width: '100%',
  },
});

export default ScaleQuestion;