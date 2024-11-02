// src/components/Survey/Navigation/ProgressBar.js

import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Theme } from 'Theme';

const ProgressBar = ({ progress, totalSections, currentSection }) => {
  const progressAnimation = React.useRef(new Animated.Value(progress)).current;

  React.useEffect(() => {
    Animated.timing(progressAnimation, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <View style={styles.container}>
      <View style={styles.progressBackground}>
        <Animated.View
          style={[
            styles.progressFill,
            {
              width: progressAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>
      <View style={styles.sectionIndicators}>
        {Array.from({ length: totalSections }, (_, index) => (
          <View
            key={index}
            style={[
              styles.sectionDot,
              index === currentSection && styles.activeDot,
              index < currentSection && styles.completedDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  totalSections: PropTypes.number.isRequired,
  currentSection: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: Theme.colors.primary,
    transform: [{ scale: 1.2 }],
  },
  completedDot: {
    backgroundColor: Theme.colors.primary,
  },
  container: {
    padding: Theme.spacing.md,
  },
  progressBackground: {
    backgroundColor: Theme.colors.border,
    borderRadius: Theme.borderRadius.small,
    height: 4,
    overflow: 'hidden',
  },
  progressFill: {
    backgroundColor: Theme.colors.primary,
    height: '100%',
  },
  sectionDot: {
    backgroundColor: Theme.colors.border,
    borderRadius: 4,
    height: 8,
    width: 8,
  },
  sectionIndicators: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Theme.spacing.sm,
  },
});

export default ProgressBar;
