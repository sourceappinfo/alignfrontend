import * as React from "react";
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from "react-native";
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
          {`This looks at a company's corporate social responsibility (CSR), transparency, accountability, and leadership practices. We examine political lobbying activities, shareholder values, and commitment to corporate social responsibility.`}
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
    transform: [
      { rotate: "-0.1deg" },
    ],
    position: "absolute",
  },
  thisLooksAt: {
    top: 147,
    left: 16,
    fontSize: 31,
    lineHeight: 55,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium, 
    width: 339,
    marginTop: 20,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  csr: {
    top: 65,
    left: 18,
    fontSize: FontSize.size_77xl,
    lineHeight: 93,
    fontFamily: FontFamily.sonder,
    width: 380,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  corporateGovernance: {
    flex: 1,
    borderRadius: Border.br_11xl,
    backgroundColor: 'transparent',  // Ensure transparency
    borderWidth: 1,
    width: "100%",
    height: 956,
    overflow: "hidden",
  },
  // Navigation Button styles
  navButton: {
    position: 'absolute',
    bottom: 40,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  navButtonLeft: {
    left: 30,  // Positioning for the back button on the left
  },
  navButtonRight: {
    right: 30,  // Positioning for the forward button on the right
  },
  navButtonText: {
    color: Color.white,
    fontSize: 20,
    fontFamily: FontFamily.ralewayExtraBold,
  },
});

export default CorporateGovernance;
