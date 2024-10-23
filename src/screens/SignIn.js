import React, { useState } from "react";
import { 
  Text, 
  StyleSheet, 
  View, 
  ImageBackground, 
  TouchableOpacity, 
  ActivityIndicator, 
  Alert
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
import { Color, Border, FontSize, FontFamily, Padding } from "GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in both email and password fields.");
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    setLoading(true);
    try {
      const response = await axios.post('http://your-backend-url/api/auth/login', { email, password });
      const { token } = response.data;
      await AsyncStorage.setItem('token', token);
      navigation.replace('Home');
    } catch (error) {
      Alert.alert("Login Failed", "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAccount = () => {
    navigation.navigate('RegisterAccount');
  };

  const handleRecoveryPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require("assets/signinpicture.jpg")}
        style={styles.background}
      >
        <View style={styles.overlay} />
        <View style={styles.signIn}>
          <View style={styles.textContainer}>
            <Text style={[styles.helloAgain, styles.helloAgainClr]}>
              Hello Again!
            </Text>
          </View>

          <RNPTextInput
            style={[styles.input, styles.emailInput]}
            placeholder="Email"
            mode="outlined"
            placeholderTextColor="rgba(255,255,255,0.7)"
            value={email}
            onChangeText={setEmail}
            theme={{
              colors: { 
                text: "#fff",
                primary: "#fff",
                background: 'transparent',
                placeholder: "rgba(255,255,255,0.7)",
                outline: "rgba(255,255,255,0.7)",
              },
              roundness: 25,
            }}
            outlineStyle={{ borderWidth: 1 }}
          />

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
                text: "#fff",
                primary: "#fff",
                background: 'transparent',
                placeholder: "rgba(255,255,255,0.7)",
                outline: "rgba(255,255,255,0.7)",
              },
              roundness: 25,
            }}
            outlineStyle={{ borderWidth: 1 }}
          />

          <TouchableOpacity 
            style={styles.recoveryPassword} 
            onPress={handleRecoveryPassword}
          >
            <Text style={styles.recoveryPasswordText}>
              Recovery Password
            </Text>
          </TouchableOpacity>

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

          <TouchableOpacity 
            onPress={handleCreateAccount} 
            style={styles.createAccountButton}
          >
            <Text style={styles.createAccountText}>
              Create Account
            </Text>
          </TouchableOpacity>

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
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  signIn: {
    width: "100%",
    height: "100%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
  helloAgain: {
    fontSize: 65,
    textTransform: "capitalize",
    fontFamily: FontFamily.sonder,
    width: 356,
    textAlign: "center",
    marginBottom: 40,
  },
  helloAgainClr: {
    color: Color.white,
  },
  input: {
    height: 50,
    borderRadius: 25,
    paddingLeft: 10,
    width: "100%",
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  emailInput: {
    marginTop: 20,
  },
  passwordInput: {
    marginBottom: 10,
  },
  recoveryPassword: {
    alignSelf: 'flex-start',
    marginBottom: 20,
    marginLeft: 20,
  },
  recoveryPasswordText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: FontSize.paragraphRegular_size,
  },
  loginButton: {
    backgroundColor: "#13557B",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
  },
  buttonText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_lg,
  },
  createAccountButton: {
    backgroundColor: "#13557B",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  createAccountText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_lg,
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

export default SignIn;