import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
    // TODO: Implement error logging (e.g., Sentry)
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.errorText}>Something went wrong.</Text>
          <Text style={styles.detailsText}>{this.state.error?.toString()}</Text>
          <Button title="Try Again" onPress={this.resetError} />
        </View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  detailsText: {
    color: 'gray',
    fontSize: 14,
    marginBottom: 16,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    marginBottom: 8,
  },
});

export default ErrorBoundary;
