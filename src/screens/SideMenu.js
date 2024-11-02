import * as React from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native';  
import { FontSize, Color, FontFamily, Border } from '../GlobalStyles';  
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

const SideMenu = () => {
  const navigation = useNavigation();  

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/Side-Menu-Background.jpg')}
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
              source={require('../assets/profileicon.png')}
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
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
  },
  editIconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 15,
    padding: 5,
    position: 'absolute',
    right: -15,
    top: 85,
  },
  menuContainer: {
    marginTop: 50,
    paddingLeft: 30,
  },
  menuItem: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  menuOption: {
    color: Color.white,
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: FontSize.paragraphRegular_size,
    marginLeft: 10,
  },
  navButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    elevation: 5,
    height: 40,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 40,
  },
  navButtonText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: 20,
  },
  navigationButtons: {
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 0,
    paddingHorizontal: 30,
    position: 'absolute',
    right: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 80,
    position: 'relative',
  },
  profilePicture: {
    borderColor: Color.white,
    borderRadius: 50,
    borderWidth: 3,
    height: 100,
    width: 100,
  },
  sideMenu: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  signOut: {
    color: Color.white,
  },
  signOutContainer: {
    marginTop: 20,
  },
  userName: {
    color: Color.white,
    fontFamily: FontFamily.ralewayMedium,
    fontSize: FontSize.size_xl,
    marginTop: 20,
  },
});

export default SideMenu;