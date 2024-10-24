import * as React from "react";
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from "react-native";
import { Color, FontSize, FontFamily } from "GlobalStyles";
import { useNavigation } from '@react-navigation/native';

const backgroundImage = require('assets/intropic4.jpg');

const Intro = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={backgroundImage} 
        style={styles.backgroundImage} 
        resizeMode="cover"
      >
        <View style={styles.intro}>
          {/* ALIGN Title - Positioned absolutely */}
          <View style={styles.frameAlign}>
            <Text style={styles.align}>ALIGN</Text>
          </View>

          {/* Main text content - Also positioned absolutely */}
          <View style={styles.frameTextContainer}>
            <View style={styles.frame2}>
              <Text style={styles.empowersConsumersWith}>
                Empowers consumers, with insights into product ethics and sustainability. 
                Make informed choices, drive change, and shape a
              </Text>
            </View>
            <View style={styles.frame1}>
              <Text style={styles.sustainableEthicalText}>
                sustainable & ethical future
              </Text>
            </View>
          </View>

          {/* Navigation Buttons */}
          <TouchableOpacity 
            style={[styles.navButton, styles.navButtonLeft]}
            onPress={() => navigation.navigate('RegisterAccount')}
          >
            <Text style={styles.navButtonText}>←</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.navButton, styles.navButtonRight]}
            onPress={() => navigation.navigate('How')}
          >
            <Text style={styles.navButtonText}>→</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  intro: {
    flex: 1,
    position: 'relative',
  },
  frameAlign: {
    position: 'absolute',
    top: 120,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  align: {
    fontSize: 105,
    fontFamily: FontFamily.sonder,
    color: Color.white,
    textAlign: 'center',
  },
  frameTextContainer: {
    position: 'absolute',
    top: '25%',
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  frame2: {
    marginBottom: 80, // Increased margin for more space between the sections
  },
  empowersConsumersWith: {
    fontSize: 31,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.white,
    textAlign: 'center',
    lineHeight: 70,
    marginBottom: -50,  // Added margin to create space below the text
  },
  frame1: {
    marginBottom: 300, // Increased margin for more space below
  },
  sustainableEthicalText: {
    fontSize: 70,
    fontFamily: FontFamily.reenieBeanie,
    color: Color.white,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 70, // Added margin for space between this text and the next element
  },
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  navButtonLeft: {
    left: 30,
  },
  navButtonRight: {
    right: 30,
  },
  navButtonText: {
    color: Color.white,
    fontSize: 20,
    fontFamily: FontFamily.ralewayExtraBold,
  },
});

export default Intro;
