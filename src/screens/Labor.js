import * as React from 'react';
import { Text, StyleSheet, View, ImageBackground, ScrollView } from 'react-native';
import SwipeableScreenWrapper from 'components/SwipeableScreenWrapper';  // Using 'components' alias
import { Color, FontSize, FontFamily, Border } from 'GlobalStyles';  // Using 'GlobalStyles' alias

const Labor = ({ navigation }) => {
  return (
    <SwipeableScreenWrapper
      onSwipeLeft={() => navigation.navigate('NextScreen')}  // Replace 'NextScreen' with the actual screen name
      onSwipeRight={() => navigation.navigate('PreviousScreen')}  // Replace 'PreviousScreen' with the actual screen name
    >
      <ImageBackground
        source={require('assets/laborpic.jpg')}  // Using 'assets' alias for the image path
        style={styles.backgroundImage}
        imageStyle={styles.image}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.overlay}>
            <Text style={[styles.laborTitle, styles.laborText]}>
              LABOR
            </Text>
            <Text style={[styles.weEvaluateHow, styles.laborText]}>
              We evaluate how a company treats its workers and respects human rights
              throughout its supply chain. Fair wages, safe working conditions, and
              responsible sourcing are all crucial aspects.
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SwipeableScreenWrapper>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
    right: 0,  // Adjusted for better positioning
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',  // Centers the content within the scroll view
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',  // Semi-transparent dark overlay for better text readability
    justifyContent: 'center',
    paddingHorizontal: 20,  // Adds padding for text alignment
  },
  laborText: {
    transform: [
      {
        rotate: '-0.1deg',
      },
    ],
    color: Color.white,
    textAlign: 'left',
    position: 'absolute',
  },
  laborTitle: {
    top: 50,
    fontSize: FontSize.size_77xl,
    lineHeight: 93,
    fontFamily: FontFamily.sonder,
    width: '90%',
    marginLeft: 20,
    marginTop: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  weEvaluateHow: {
    top: 180,
    fontSize: FontSize.size_16xl,
    lineHeight: 48,
    marginTop: 22,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: '500',
    fontFamily: FontFamily.maliMedium,
    width: '85%',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
});

export default Labor;
