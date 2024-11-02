import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TextInput as RNPTextInput, Button } from 'react-native-paper';
import { Color, FontSize, FontFamily, Border, Padding } from 'GlobalStyles';  // Updated the alias

const ForgotPassword1 = () => {
  return (
    <View style={styles.forgotPassword}>
      <Text style={styles.how}>How</Text>
      <Text
        style={[styles.enterYourEmail, styles.passwordClr]}
      >{`Enter your Email account to reset
your password`}</Text>
      <Text style={[styles.forgotPassword1, styles.passwordClr]}>
        Forgot Password
      </Text>
      <RNPTextInput
        style={styles.searchbutton}
        placeholder="Email"
        mode="outlined"
        placeholderTextColor="#6a6a6a"
        theme={{
          fonts: { regular: { fontFamily: 'Poppins', fontWeight: 'Medium' } },
          colors: { text: '#6a6a6a' },
        }}
      />
      <Button
        style={styles.forgotPasswordChild}
        mode="contained"
        contentStyle={styles.rectangleButtonBtn}
      >
        Reset Password
      </Button>
      <Text style={[styles.resetPassword, styles.passwordClr]}>
        Reset password
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  enterYourEmail: {
    fontFamily: FontFamily.reenieBeanie,
    fontSize: FontSize.size_17xl,
    height: 83,
    left: 25,
    lineHeight: 24,
    textAlign: 'center',
    top: 236,
    width: 374,
  },
  forgotPassword: {
    backgroundColor: Color.colorBlack,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_xl,
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 1,
    height: 956,
    width: '100%',
  },
  forgotPassword1: {
    fontFamily: FontFamily.sonder,
    fontSize: FontSize.size_31xl,
    height: 57,
    left: 22,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    top: 147,
    width: 397,
  },
  forgotPasswordChild: {
    bottom: '46.44%',
    left: '4.77%',
    position: 'absolute',
    right: '4.77%',
    top: '47.5%',
  },
  how: {
    color: Color.colorPaleturquoise,
    fontFamily: FontFamily.nATS,
    fontSize: FontSize.size_77xl,
    height: 80,
    left: 521,
    letterSpacing: 9.6,
    lineHeight: 96,
    position: 'absolute',
    textAlign: 'center',
    top: 25,
    transform: [
      {
        rotate: '0.1deg',
      },
    ],
    width: 202,
  },
  passwordClr: {
    color: Color.white,
    position: 'absolute',
    textTransform: 'capitalize',
  },
  rectangleButtonBtn: {
    borderRadius: 13,
    height: '6.06%',
    width: '90.45%',
  },
  resetPassword: {
    fontFamily: FontFamily.ralewaySemiBold,
    fontSize: FontSize.size_xl,
    fontWeight: '600',
    height: '2.72%',
    left: '31.59%',
    lineHeight: 22,
    textAlign: 'left',
    top: '49.16%',
    width: '37.27%',
  },
  searchbutton: {
    alignItems: 'center',
    borderRadius: Border.br_sm,
    flexDirection: 'row',
    height: 56,
    left: 21,
    paddingBottom: Padding.p_base,
    paddingLeft: Padding.p_sm,
    paddingRight: Padding.p_38xl,
    paddingTop: Padding.p_base,
    position: 'absolute',
    top: 352,
    width: 398,
  },
});

export default ForgotPassword1;
