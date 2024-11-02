import * as React from 'react';
import { Image, TouchableOpacity, Text, StyleSheet, View, ImageBackground, ScrollView } from 'react-native';
import { Padding, Color, Border, FontFamily, FontSize } from 'GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; // For edit icon

const backgroundImage = require('assets/profilebackground.jpg'); 

const Profile = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
      <View style={styles.overlay} />
      
      <ScrollView contentContainerStyle={styles.profileContent}>
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image
              style={styles.profileImage}
              contentFit="cover"
              source={require('assets/profileicon.png')}
            />
            {/* White edit icon positioned closer */}
            <TouchableOpacity 
              style={styles.editIconContainer} 
              onPress={() => { /* handle profile picture change */ }}
            >
              <MaterialIcons name="edit" size={20} color={Color.white} />
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>Emmanuel Oyiboke</Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Your Name</Text>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Emmanuel Oyiboke</Text>
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>emmanueloyiboke@gmail.com</Text>
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>+123 456 7890</Text>
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Date of Birth</Text>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>January 1, 1990</Text>
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Address</Text>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>123 Main Street, City, Country</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Now</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Navigation Buttons - Moved to the bottom */}
      <TouchableOpacity 
        style={[styles.navButton, styles.navButtonLeft]} 
        onPress={() => navigation.goBack()} 
      >
        <Text style={styles.navButtonText}>←</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.navButton, styles.navButtonRight]} 
        onPress={() => navigation.navigate('SideMenu')} 
      >
        <Text style={styles.navButtonText}>→</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0, // Positioned closer to the profile picture
    right: -15,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    padding: 5,
  },
  fieldContainer: {
    marginBottom: 20,
    width: '100%',
  },
  inputBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: Border.br_sm,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  inputText: {
    color: Color.white,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_md,
  },
  label: {
    color: Color.white,
    fontFamily: FontFamily.ralewayMedium,
    fontSize: FontSize.paragraphRegular_size,
    marginBottom: 5,
  },
  navButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    bottom: 40,
    height: 40,
    justifyContent: 'center',
    position: 'absolute',
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  profileContent: {
    alignItems: 'center',
    paddingBottom: 100,
    paddingHorizontal: 20,
    paddingTop: 100, // To leave space for the navigation buttons
  },
  profileImage: {
    borderColor: Color.white,
    borderRadius: 60,
    borderWidth: 2,
    height: 120,
    width: 120,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  saveButton: {
    alignItems: 'center',
    backgroundColor: '#13557b',
    borderRadius: 25,
    marginTop: 30,
    paddingVertical: 10,
    width: '100%',
  },
  saveButtonText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: FontSize.size_xl,
  },
  userName: {
    color: Color.white,
    fontFamily: FontFamily.ralewayMedium,
    fontSize: FontSize.size_xl,
    marginTop: 10,
  },
});

export default Profile;
