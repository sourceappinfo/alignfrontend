// src/components/Survey/Navigation/NavigationButtons.js

import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Theme } from 'Theme';

const NavigationButtons = ({ onNext, onPrevious, canGoNext, canGoPrevious, isLastSection }) => (
  <View style={styles.container}>
    {canGoPrevious && (
      <Button
        title="Previous"
        onPress={onPrevious}
        disabled={!canGoPrevious}
        color={Theme.colors.primary}
      />
    )}
    <Button
      title={isLastSection ? "Finish" : "Next"}
      onPress={onNext}
      disabled={!canGoNext}
      color={Theme.colors.primary}
    />
  </View>
);

NavigationButtons.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  canGoNext: PropTypes.bool.isRequired,
  canGoPrevious: PropTypes.bool.isRequired,
  isLastSection: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Theme.spacing.md,
  },
});

export default NavigationButtons;
