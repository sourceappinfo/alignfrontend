import * as React from "react";
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from '@react-navigation/native';  
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";  
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

const SideMenu = () => {
  const navigation = useNavigation();  

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require("../assets/Side-Menu-Background.jpg")}
        style={styles.background} 
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View style={styles.sideMenu}>
          {/* Profile Section */}
          <View style={styles.profileContainer}>
            <Image
              style={styles.profilePicture}
              contentFit="cover"
              source={require("../assets/profileicon.png")}
            />
            {/* Edit Icon placed next to Profile Picture */}
            <TouchableOpacity 
              style={styles.editIconContainer}
              onPress={() => navigation.navigate('Profile')}
            >
              <MaterialIcons name="edit" size={20} color={Color.white} />
            </TouchableOpacity>
            <Text style={styles.userName}>Emmanuel Oyiboke</Text>
          </View>

          {/* Menu Section with icons */}
          <View style={styles.menuContainer}>
            <TouchableOpacity 
              style={styles.menuItem} 
              onPress={() => navigation.navigate('Profile')}
            >
              <Ionicons name="person" size={24} color={Color.white} />
              <Text style={styles.menuOption}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.menuItem} 
              onPress={() => navigation.navigate('Recommendations')}
            >
              <FontAwesome5 name="hand-holding-heart" size={24} color={Color.white} />
              <Text style={styles.menuOption}>Recommendations</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.menuItem} 
              onPress={() => navigation.navigate('Favorites')}
            >
              <MaterialIcons name="favorite" size={24} color={Color.white} />
              <Text style={styles.menuOption}>Favorites</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.menuItem} 
              onPress={() => navigation.navigate('Notifications')}
            >
              <Ionicons name="notifications" size={24} color={Color.white} />
              <Text style={styles.menuOption}>Notifications</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.menuItem} 
              onPress={() => navigation.navigate('Settings')}
            >
              <Ionicons name="settings" size={24} color={Color.white} />
              <Text style={styles.menuOption}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.menuItem, styles.signOutContainer]} 
              onPress={() => navigation.navigate('SignOut')}
            >
              <Ionicons name="log-out-outline" size={24} color={Color.white} />
              <Text style={[styles.menuOption, styles.signOut]}>Sign Out</Text>
            </TouchableOpacity>
          </View>

          {/* Back Button */}
          <View style={styles.navigationButtons}>
            <TouchableOpacity 
              style={styles.navButton} 
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.navButtonText}>←</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  sideMenu: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 80,
    position: 'relative',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Color.white,
  },
  editIconContainer: {
    position: 'absolute',
    top: 85,
    right: -15,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 15,
    padding: 5,
  },
  userName: {
    marginTop: 20,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.ralewayMedium,
    color: Color.white,
  },
  menuContainer: {
    marginTop: 50,
    paddingLeft: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuOption: {
    fontSize: FontSize.paragraphRegular_size,
    fontFamily: FontFamily.ralewayExtraBold,
    color: Color.white,
    marginLeft: 10,
  },
  signOutContainer: {
    marginTop: 20,
  },
  signOut: {
    color: Color.white,
  },
  navigationButtons: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  navButton: {
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
  navButtonText: {
    color: Color.white,
    fontSize: 20,
    fontFamily: FontFamily.ralewayExtraBold,
  },
});

export default SideMenu;