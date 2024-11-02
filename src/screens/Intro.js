import * as React from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Color, FontSize, FontFamily } from 'GlobalStyles';
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
  align: {
    color: Color.white,
    fontFamily: FontFamily.sonder,
    fontSize: 105,
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  empowersConsumersWith: {
    color: Color.white,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: 31,
    lineHeight: 70,
    marginBottom: -50,
    textAlign: 'center',  // Added margin to create space below the text
  },
  frame1: {
    marginBottom: 300, // Increased margin for more space below
  },
  frame2: {
    marginBottom: 80, // Increased margin for more space between the sections
  },
  frameAlign: {
    alignItems: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 120,
  },
  frameTextContainer: {
    alignItems: 'center',
    left: 0,
    paddingHorizontal: 20,
    position: 'absolute',
    right: 0,
    top: '25%',
  },
  intro: {
    flex: 1,
    position: 'relative',
  },
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 40,
  },
  navButtonLeft: {
    left: 30,
  },
  navButtonRight: {
    right: 30,
  },
  navButtonText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: 20,
  },
  sustainableEthicalText: {
    color: Color.white,
    fontFamily: FontFamily.reenieBeanie,
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 70,
    textAlign: 'center', // Added margin for space between this text and the next element
  },
});

export default Intro;
