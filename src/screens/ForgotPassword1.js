import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { TextInput as RNPTextInput, Button } from "react-native-paper";
import { Color, FontSize, FontFamily, Border, Padding } from "GlobalStyles";  // Updated the alias

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
          fonts: { regular: { fontFamily: "Poppins", fontWeight: "Medium" } },
          colors: { text: "#6a6a6a" },
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
  rectangleButtonBtn: {
    borderRadius: 13,
    height: "6.06%",
    width: "90.45%",
  },
  passwordClr: {
    color: Color.white,
    textTransform: "capitalize",
    position: "absolute",
  },
  how: {
    top: 25,
    left: 521,
    fontSize: FontSize.size_77xl,
    letterSpacing: 9.6,
    lineHeight: 96,
    fontFamily: FontFamily.nATS,
    color: Color.colorPaleturquoise,
    width: 202,
    height: 80,
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
    textAlign: "center",
    position: "absolute",
  },
  enterYourEmail: {
    top: 236,
    left: 25,
    fontSize: FontSize.size_17xl,
    lineHeight: 24,
    fontFamily: FontFamily.reenieBeanie,
    width: 374,
    height: 83,
    textAlign: "center",
  },
  forgotPassword1: {
    top: 147,
    left: 22,
    fontSize: FontSize.size_31xl,
    fontFamily: FontFamily.sonder,
    width: 397,
    height: 57,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "center",
  },
  searchbutton: {
    top: 352,
    left: 21,
    borderRadius: Border.br_sm,
    width: 398,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Padding.p_sm,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_38xl,
    paddingBottom: Padding.p_base,
    position: "absolute",
  },
  forgotPasswordChild: {
    top: "47.5%",
    right: "4.77%",
    bottom: "46.44%",
    left: "4.77%",
    position: "absolute",
  },
  resetPassword: {
    height: "2.72%",
    width: "37.27%",
    top: "49.16%",
    left: "31.59%",
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.ralewaySemiBold,
    textAlign: "left",
  },
  forgotPassword: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorBlack,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 956,
  },
});

export default ForgotPassword1;
