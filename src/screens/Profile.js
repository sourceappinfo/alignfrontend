import * as React from "react";
import { Image, TouchableOpacity, Text, StyleSheet, View, ImageBackground, ScrollView } from "react-native";
import { Padding, Color, Border, FontFamily, FontSize } from "GlobalStyles";
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
              source={require("assets/profileicon.png")}
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
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  profileContent: {
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 20,
    paddingBottom: 100, // To leave space for the navigation buttons
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: Color.white,
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0, // Positioned closer to the profile picture
    right: -15,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    padding: 5,
  },
  userName: {
    marginTop: 10,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.ralewayMedium,
    color: Color.white,
  },
  fieldContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: FontSize.paragraphRegular_size,
    fontFamily: FontFamily.ralewayMedium,
    color: Color.white,
    marginBottom: 5,
  },
  inputBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: Border.br_sm,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  inputText: {
    color: Color.white,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_md,
  },
  saveButton: {
    width: '100%',
    backgroundColor: '#13557b',
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  saveButtonText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: FontSize.size_xl,
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

export default Profile;
