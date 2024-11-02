import * as React from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { FontSize, FontFamily, Color, Border } from 'GlobalStyles';  // No 'src/' because of the alias setup

const CorporateGovernance = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('assets/csr-background.jpg')}  // Ensure this path is correct
      style={styles.backgroundImage}
    >
      {/* Temporarily remove overlay for testing */}
      {/* <View style={styles.overlay} /> */}

      <View style={styles.corporateGovernance}>
        <Text style={[styles.thisLooksAt, styles.csrTransform]}>
          {'This looks at a company\'s corporate social responsibility (CSR), transparency, accountability, and leadership practices. We examine political lobbying activities, shareholder values, and commitment to corporate social responsibility.'}
        </Text>

        <Text style={[styles.csr, styles.csrTransform]}>CSR</Text>
        
        {/* Navigation Buttons */}
        <TouchableOpacity 
          style={[styles.navButton, styles.navButtonLeft]} 
          onPress={() => navigation.navigate('Labor')}  // Navigate to the previous screen
        >
          <Text style={styles.navButtonText}>←</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navButton, styles.navButtonRight]} 
          onPress={() => navigation.navigate('Survey')}  // Navigate to the next screen
        >
          <Text style={styles.navButtonText}>→</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%', // Ensure it covers full width
    height: '100%', // Ensure it covers full height
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Comment out the overlay for testing
  // overlay: {
  //   ...StyleSheet.absoluteFillObject,  // Covers the entire screen
  //   backgroundColor: 'rgba(0, 0, 0, 0)',  // Adjustable opacity overlay
  // },
  csrTransform: {
    position: 'absolute',
    transform: [
      { rotate: '-0.1deg' },
    ],
  },
  thisLooksAt: {
    color: Color.white,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: 31,
    fontWeight: '500',
    left: 16,
    lineHeight: 55, 
    marginTop: 20,
    position: 'absolute',
    textAlign: 'left',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    top: 147,
    width: 339,
  },
  csr: {
    color: Color.white,
    fontFamily: FontFamily.sonder,
    fontSize: FontSize.size_77xl,
    left: 18,
    lineHeight: 93,
    position: 'absolute',
    textAlign: 'left',
    top: 65,
    width: 380,
  },
  corporateGovernance: {
    flex: 1,
    borderRadius: Border.br_11xl,
    backgroundColor: 'transparent',  // Ensure transparency
    borderWidth: 1,
    width: '100%',
    height: 956,
    overflow: 'hidden',
  },
  // Navigation Button styles
  navButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    bottom: 40,
    elevation: 5,
    height: 40,
    justifyContent: 'center',
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 40,
  },
  navButtonLeft: {
    left: 30,  // Positioning for the back button on the left
  },
  navButtonRight: {
    right: 30,  // Positioning for the forward button on the right
  },
  navButtonText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: 20,
  },
});

export default CorporateGovernance;
