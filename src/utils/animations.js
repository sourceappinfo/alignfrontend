import { Animated, Easing } from 'react-native';

export const Animations = {
  fadeIn: (value, duration = 300) => {
    return Animated.timing(value, {
      toValue: 1,
      duration,
      useNativeDriver: true,
      easing: Easing.ease,
    });
  },
  
  fadeOut: (value, duration = 300) => {
    return Animated.timing(value, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      easing: Easing.ease,
    });
  },
  
  slideIn: (value, duration = 300) => {
    return Animated.spring(value, {
      toValue: 0,
      useNativeDriver: true,
      damping: 20,
      mass: 1,
      stiffness: 100,
    });
  },
  
  scaleButton: (value) => {
    return Animated.sequence([
      Animated.timing(value, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(value, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]);
  },
};
