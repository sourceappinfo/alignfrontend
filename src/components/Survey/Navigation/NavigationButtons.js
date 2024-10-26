import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Theme } from '../../../config/theme';

const NavigationButtons = ({ onNext, onPrevious, canGoNext, canGoPrevious, isLastSection }) => {
  return (
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
};

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
