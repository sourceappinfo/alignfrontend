import React from "react";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { 
  useAnimatedGestureHandler, 
  useAnimatedStyle, 
  useSharedValue, 
  withTiming 
} from "react-native-reanimated";

const SwipeableScreenWrapper = ({ children, onSwipeLeft, onSwipeRight, simultaneousHandlers }) => {
  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler({
    onStart: (event) => {
      console.log("Gesture started:", event);
    },
    onActive: (event) => {
      console.log("Gesture active:", event.translationX); // Debug log
      translateX.value = event.translationX;
    },
    onEnd: (event) => {
      console.log("Swipe detected:", event.translationX); // Debugging log
      if (event.translationX < -30 && onSwipeLeft) { // Adjusted swipe sensitivity
        console.log("Swiping left, calling onSwipeLeft");
        onSwipeLeft();
      } else if (event.translationX > 30 && onSwipeRight) {
        console.log("Swiping right, calling onSwipeRight");
        onSwipeRight();
      }
      translateX.value = withTiming(0);
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <PanGestureHandler 
      onGestureEvent={panGesture} 
      simultaneousHandlers={simultaneousHandlers} 
      shouldCancelWhenOutside={false} // Ensure gesture continues outside bounds
      waitFor={simultaneousHandlers} // Wait for ScrollView gestures
    >
      <Animated.View style={[{ flex: 1 }, rStyle]}>
        {children}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default SwipeableScreenWrapper;
