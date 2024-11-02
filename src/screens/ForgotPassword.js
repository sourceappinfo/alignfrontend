import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput as RNPTextInput, Button } from 'react-native-paper';
import { Image } from 'expo-image';
import { Color, FontSize, FontFamily, Border } from 'GlobalStyles';  // Updated the alias

const ForgotPassword = () => {
  return (
    <View style={styles.forgotPassword2}>
      <View style={styles.forgotPassword2Child} />
      <Text style={[styles.forgotPassword, styles.forgotPasswordText]}>
        Forgot Password
      </Text>
      <RNPTextInput
        style={[styles.forgotPassword2Item, styles.rectangleViewLayout]}
        placeholder="Email"
        mode="outlined"
        placeholderTextColor="#6a6a6a"
        theme={{
          fonts: { regular: { fontFamily: 'Poppins', fontWeight: 'Medium' } },
          colors: { text: '#6a6a6a' },
        }}
      />
      <Button
        style={styles.forgotPassword2Inner}
        mode="contained"
        contentStyle={styles.rectangleButtonBtn}
      >
        Reset Password
      </Button>
      <Text style={styles.resetPassword}>Reset password</Text>
      <View style={styles.menuicon}>
        <Image
          style={styles.appsCircleIcon}
          contentFit="cover"
          source={require('assets/appscircle.png')} // Updated path
        />
      </View>
      <Text style={[styles.enterYourEmail, styles.forgotPasswordText]}>
        {'Enter your Email account to reset your password'}
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Image
        style={[styles.ellipseIcon, styles.iconLayout]}
        contentFit="cover"
        source={require('assets/ellipse-674.png')} // Updated path
      />
      <Text style={[styles.weHaveSend, styles.weHaveSendTypo]}>
        We have sent a password recovery code to your email
      </Text>
      <Text style={[styles.checkYourEmail, styles.weHaveSendTypo]}>
        Check your email
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition4]}
        contentFit="cover"
        source={require('assets/vector.png')} // Updated path
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition3]}
        contentFit="cover"
        source={require('assets/vector1.png')} // Updated path
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition3]}
        contentFit="cover"
        source={require('assets/vector2.png')} // Updated path
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require('assets/vector3.png')} // Updated path
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require('assets/vector4.png')} // Updated path
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require('assets/vector5.png')} // Updated path
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconPosition]}
        contentFit="cover"
        source={require('assets/vector6.png')} // Updated path
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconPosition]}
        contentFit="cover"
        source={require('assets/vector7.png')} // Updated path
      />
    </View>
  );
};

const styles = StyleSheet.create({
  appsCircleIcon: {
    height: 24,
    width: 24,
  },
  checkYourEmail: {
    color: Color.b2B2B,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: '700',
    height: 23,
    top: 649,
  },
  ellipseIcon: {
    bottom: '60.46%',
    height: '5.33%',
    left: '44.77%',
    right: '43.41%',
    top: '34.21%',
    width: '11.82%',
  },
  enterYourEmail: {
    fontFamily: FontFamily.reenieBeanie,
    fontSize: FontSize.size_13xl,
    left: 62,
    lineHeight: 24,
    top: 228,
    width: 315,
  },
  forgotPassword: {
    fontFamily: FontFamily.sonder,
    fontSize: 48,
    height: 55,
    left: 57,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    top: 146,
    width: 326,
  },
  forgotPassword2: {
    backgroundColor: Color.colorBlack,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_xl,
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 1,
    height: 956,
    width: '100%',
  },
  forgotPassword2Child: {
    height: 110,
    left: 30,
    position: 'absolute',
    top: 173,
    width: 364,
  },
  forgotPassword2Inner: {
    bottom: '46.43%',
    left: '5.45%',
    position: 'absolute',
    right: '6.5%',
    top: '47.47%',
  },
  forgotPassword2Item: {
    height: 48,
    left: 24,
    top: 351,
  },
  forgotPasswordText: {
    color: Color.white,
    position: 'absolute',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'absolute',
  },
  menuicon: {
    alignItems: 'center',
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: 40,
    height: 51,
    justifyContent: 'center',
    left: 30,
    padding: 15,
    position: 'absolute',
    top: 922,
    width: 51,
  },
  rectangleButtonBtn: {
    borderRadius: 13,
    height: '6.1%',
    width: '88.05%',
  },
  rectangleView: {
    backgroundColor: Color.white,
    borderRadius: 16,
    height: 229,
    left: 29,
    top: 513,
  },
  rectangleViewLayout: {
    position: 'absolute',
    width: 387,
  },
  resetPassword: {
    color: Color.white,
    fontFamily: FontFamily.ralewaySemiBold,
    fontSize: FontSize.size_xl,
    fontWeight: '600',
    height: '2.72%',
    left: '30.68%',
    lineHeight: 22,
    position: 'absolute',
    textAlign: 'left',
    textTransform: 'capitalize',
    top: '49.48%',
    width: '41.14%',
  },
  vectorIcon: {
    bottom: '61.91%',
    height: '1.5%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'absolute',
    top: '36.59%',
  },
  vectorIcon1: {
    height: '1.07%',
    left: '47.8%',
    right: '46.43%',
    top: '36.36%',
    width: '5.77%',
  },
  vectorIcon2: {
    height: '1.78%',
    left: '48.93%',
    right: '47.59%',
    top: '35.65%',
    width: '3.48%',
  },
  vectorIcon3: {
    bottom: '63.84%',
    height: '0.12%',
    left: '49.73%',
    right: '48.39%',
    top: '36.05%',
    width: '1.89%',
  },
  vectorIcon4: {
    bottom: '63.16%',
    height: '0.12%',
    left: '49.73%',
    right: '49.32%',
    top: '36.73%',
    width: '0.95%',
  },
  vectorIcon5: {
    bottom: '63.5%',
    height: '0.12%',
    left: '49.73%',
    right: '48.39%',
    top: '36.38%',
    width: '1.89%',
  },
  vectorIcon6: {
    left: '47.93%',
    right: '50%',
    width: '2.07%',
  },
  vectorIcon7: {
    left: '51.36%',
    right: '46.55%',
    width: '2.09%',
  },
  vectorIconLayout: {
    height: '0.12%',
    left: '49.73%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'absolute',
  },
  vectorIconPosition: {
    bottom: '61.96%',
    height: '0.78%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'absolute',
    top: '37.26%',
  },
  vectorIconPosition3: {
    bottom: '62.57%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'absolute',
  },
  vectorIconPosition4: {
    left: '47.8%',
    right: '46.43%',
    width: '5.77%',
  },
  weHaveSend: {
    color: '#707b81',
    fontFamily: FontFamily.poppinsRegular,
    height: 47,
    top: 681,
  },
  weHaveSendTypo: {
    fontSize: FontSize.paragraphRegular_size,
    left: 40,
    lineHeight: 20,
    position: 'absolute',
    textAlign: 'center',
    textTransform: 'capitalize',
    width: 364,
  },
});

export default ForgotPassword;
