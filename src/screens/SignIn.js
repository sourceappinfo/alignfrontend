import React, { useState } from 'react';
import { 
  Text, 
  StyleSheet, 
  View, 
  ImageBackground, 
  TouchableOpacity, 
  ActivityIndicator, 
  Alert,
} from 'react-native';
import { TextInput as RNPTextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Color, Border, FontSize, FontFamily } from 'GlobalStyles';
import { auth } from '../services/api'; // Ensure this path matches your project structure

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [overlayOpacity, setOverlayOpacity] = useState(0.5);  // Adjustable overlay opacity

  const validateForm = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both email and password fields.');
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    setLoading(true);
    try {
      const response = await auth.login({ email, password });
      const { token } = response;
      await AsyncStorage.setItem('token', token);
      navigation.replace('SideMenu'); // Navigate to SideMenu after login
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Invalid email or password.';
      Alert.alert('Login Failed', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAccount = () => {
    navigation.navigate('Profile'); // Navigate to Profile on create account
  };

  const handleRecoveryPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('assets/howlightpic.jpg')} // Background image
        style={styles.background}
      >
        {/* Overlay with adjustable opacity */}
        <View style={[styles.overlay, { backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }]} />

        {/* Independent TextContainer */}
        <View style={styles.textContainer}>
          <Text style={[styles.helloAgain, styles.helloAgainClr]}>
            Hello Again!
          </Text>
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <RNPTextInput
            style={[styles.input, styles.emailInput]}
            placeholder="Email"
            mode="outlined"
            placeholderTextColor="rgba(255,255,255,0.7)"
            value={email}
            onChangeText={setEmail}
            theme={{
              colors: { 
                text: '#fff',
                primary: '#fff',
                background: 'transparent',
                placeholder: 'rgba(255,255,255,0.7)',
                outline: 'rgba(255,255,255,0.7)',
              },
              roundness: 25,
            }}
            outlineStyle={{ borderWidth: 1 }}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <RNPTextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Password"
            mode="outlined"
            secureTextEntry
            placeholderTextColor="rgba(255,255,255,0.7)"
            value={password}
            onChangeText={setPassword}
            theme={{
              colors: { 
                text: '#fff',
                primary: '#fff',
                background: 'transparent',
                placeholder: 'rgba(255,255,255,0.7)',
                outline: 'rgba(255,255,255,0.7)',
              },
              roundness: 25,
            }}
            outlineStyle={{ borderWidth: 1 }}
          />
        </View>

        {/* Recovery Password */}
        <View style={styles.recoveryPasswordContainer}>
          <TouchableOpacity 
            style={styles.recoveryPassword} 
            onPress={handleRecoveryPassword}
          >
            <Text style={styles.recoveryPasswordText}>
              Recovery Password
            </Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            onPress={handleLogin} 
            style={styles.loginButton} 
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color={Color.white} />
            ) : (
              <Text style={styles.buttonText}>Sign In</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Create Account Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            onPress={handleCreateAccount} 
            style={styles.createAccountButton}
          >
            <Text style={styles.createAccountText}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>

        {/* Navigation Buttons */}
        <TouchableOpacity 
          style={[styles.navButton, styles.navButtonLeft]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.navButtonText}>←</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navButton, styles.navButtonRight]}
          onPress={() => navigation.navigate('Intro')}
        >
          <Text style={styles.navButtonText}>→</Text>
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  // Overlay style with absolute positioning and adjustable background color
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0)', // Default opacity, but adjustable via state
  },
  textContainer: {
    position: 'absolute',
    top: 250, // You can adjust this value to move it
    width: '100%',
    alignItems: 'center',
  },
  helloAgain: {
    fontFamily: FontFamily.sonder,
    fontSize: 65,
    textAlign: 'center',
    textTransform: 'capitalize',
    width: 356,
  },
  helloAgainClr: {
    color: Color.white,
  },
  inputContainer: {
    position: 'absolute',
    top: 250, // Adjust to move input fields independently
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: 'transparent',
    borderRadius: 25,
    height: 50,
    paddingLeft: 10,
    width: '100%',
  },
  emailInput: {
    marginTop: 100,
  },
  passwordInput: {
    marginTop: 170,
  },
  recoveryPasswordContainer: {
    position: 'absolute',
    top: 480, // Adjust to move independently
    left: 40,
  },
  recoveryPasswordText: {
    color: Color.white,
    fontFamily: FontFamily.ralewaylight,
    fontSize: FontSize.paragraphRegular_size,
  },
  buttonContainer: {
    position: 'absolute',
    top: 520, // Adjust position of the buttons
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Same as nav button background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
  },
  createAccountButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Same as nav button background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 60, // Adds space between buttons
    width: '100%',
  },
  buttonText: {
    color: '#052B41',
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: FontSize.size_lg,
    fontWeight: '800',
  },
  createAccountText: {
    color: '#052B41',
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: FontSize.size_lg,
    fontWeight: '800',
  },
  navButton: {
    position: 'absolute',
    bottom: 40,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Light blue button background
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
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: 20,
  },
});

export default SignIn;
