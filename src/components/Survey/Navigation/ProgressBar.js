// src/components/Survey/Navigation/ProgressBar.js
import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { Color } from '../../../GlobalStyles';

const ProgressBar = ({ progress, totalSections, currentSection }) => {
  const progressAnimation = React.useRef(new Animated.Value(progress)).current;

  React.useEffect(() => {
    Animated.timing(progressAnimation, {
      toValue: progress,
      duration: 300,
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
        {Array(totalSections)
          .fill(0)
          .map((_, index) => (
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

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  progressBackground: {
    height: 4,
    backgroundColor: Color.border,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Color.primary,
  },
  sectionIndicators: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  sectionDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Color.border,
  },
  activeDot: {
    backgroundColor: Color.primary,
    transform: [{ scale: 1.2 }],
  },
  completedDot: {
    backgroundColor: Color.primary,
  },
});

export default ProgressBar;

// src/components/Survey/Navigation/NavigationButtons.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Color, FontFamily } from '../../../GlobalStyles';

const NavigationButtons = ({
  onNext,
  onPrevious,
  onSubmit,
  canGoNext,
  canGoPrevious,
  isLastSection,
  isLoading,
}) => {
  return (
    <View style={styles.container}>
      {canGoPrevious && (
        <TouchableOpacity
          style={styles.button}
          onPress={onPrevious}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
      )}
      
      {isLastSection ? (
        <TouchableOpacity
          style={[styles.button, styles.submitButton]}
          onPress={onSubmit}
          disabled={!canGoNext || isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color={Color.white} />
          ) : (
            <Text style={[styles.buttonText, styles.submitButtonText]}>
              Submit
            </Text>
          )}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.button, canGoNext && styles.activeButton]}
          onPress={onNext}
          disabled={!canGoNext || isLoading}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: Color.white,
    borderTopWidth: 1,
    borderTopColor: Color.border,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    backgroundColor: Color.secondary,
    minWidth: 120,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: Color.primary,
  },
  submitButton: {
    backgroundColor: Color.success,
  },
  buttonText: {
    color: Color.white,
    fontSize: 16,
    fontFamily: FontFamily.ralewayMedium,
  },
  submitButtonText: {
    fontFamily: FontFamily.ralewayBold,
  },
});

export default NavigationButtons;

// src/components/Survey/ErrorBoundary.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Color, FontFamily } from '../../GlobalStyles';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error('Survey Error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.errorTitle}>Something went wrong</Text>
          <Text style={styles.errorMessage}>
            {this.state.error?.message || 'Please try again'}
          </Text>
          <TouchableOpacity 
            style={styles.retryButton}
            onPress={this.handleRetry}
          >
            <Text style={styles.retryButtonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Color.background,
  },
  errorTitle: {
    fontSize: 20,
    fontFamily: FontFamily.ralewayBold,
    color: Color.error,
    marginBottom: 8,
  },
  errorMessage: {
    fontSize: 16,
    fontFamily: FontFamily.ralewayRegular,
    color: Color.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
  },
  retryButton: {
    backgroundColor: Color.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  retryButtonText: {
    color: Color.white,
    fontSize: 16,
    fontFamily: FontFamily.ralewayMedium,
  },
});

export default ErrorBoundary;