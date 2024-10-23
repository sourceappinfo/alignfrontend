import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button, TextInput as RNPTextInput } from "react-native-paper";
import { Color, FontSize, FontFamily, Border } from "GlobalStyles";

const Verification = () => {
  return (
    <View style={styles.verification}>
      <Text style={[styles.otpVerification, styles.otpText]}>
        OTP Verification
      </Text>
      <Text style={[styles.pleaseCheckYour, styles.otpText]}>
        Please check your email to see the verification code
      </Text>
      <RNPTextInput
        style={[styles.verificationInput, styles.otpCodePosition]}
        placeholder="One Time Password Code"
        mode="outlined"
        placeholderTextColor="#000"
        theme={{
          fonts: { regular: { fontFamily: "Poppins", fontWeight: "SemiBold" } },
          colors: { text: "#000" },
        }}
      />
      <Text style={[styles.otpCode, styles.otpCodePosition]}>OTP Code</Text>
      <Button
        style={styles.verifyButton}
        mode="contained"
        contentStyle={styles.verifyButtonContent}
      >
        Verify
      </Button>
      <Text style={[styles.resendCodeTo, styles.resendCodeText]}>
        Resend code to
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  otpText: {
    textAlign: "center",
    color: Color.white,
    textTransform: "capitalize",
  },
  otpCodePosition: {
    left: 44,
    position: "absolute",
  },
  otpVerification: {
    top: 142,
    left: 72,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.sonder,
    width: 296,
    height: 45,
    position: "absolute",
  },
  pleaseCheckYour: {
    top: 214,
    left: 45,
    fontSize: FontSize.size_13xl,
    lineHeight: 24,
    fontFamily: FontFamily.reenieBeanie,
    width: 355,
    height: 55,
    transform: [{ rotate: "0.3deg" }],
    position: "absolute",
  },
  verificationInput: {
    top: 323,
    width: 359,
    height: 60,
  },
  otpCode: {
    top: 284,
    fontSize: 21,
    fontWeight: "800",
    fontFamily: FontFamily.ralewayExtraBold,
    width: 107,
    height: 27,
    textAlign: "center",
    color: Color.white,
    textTransform: "capitalize",
  },
  verifyButton: {
    top: "45.82%",
    left: "10.91%",
    right: "8.41%",
    position: "absolute",
  },
  verifyButtonContent: {
    borderRadius: 13,
    height: 50,
    width: "100%",
  },
  resendCodeTo: {
    top: 410,
    left: 51,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.ralewayRegular,
    color: Color.white,
    position: "absolute",
  },
  verification: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorBlack,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default Verification;
