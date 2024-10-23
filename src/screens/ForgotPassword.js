import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput as RNPTextInput, Button } from "react-native-paper";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "GlobalStyles";  // Updated the alias

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
          fonts: { regular: { fontFamily: "Poppins", fontWeight: "Medium" } },
          colors: { text: "#6a6a6a" },
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
          source={require("assets/appscircle.png")} // Updated path
        />
      </View>
      <Text style={[styles.enterYourEmail, styles.forgotPasswordText]}>
        {`Enter your Email account to reset your password`}
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Image
        style={[styles.ellipseIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("assets/ellipse-674.png")} // Updated path
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
        source={require("assets/vector.png")} // Updated path
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition3]}
        contentFit="cover"
        source={require("assets/vector1.png")} // Updated path
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition3]}
        contentFit="cover"
        source={require("assets/vector2.png")} // Updated path
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("assets/vector3.png")} // Updated path
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("assets/vector4.png")} // Updated path
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("assets/vector5.png")} // Updated path
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("assets/vector6.png")} // Updated path
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("assets/vector7.png")} // Updated path
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleButtonBtn: {
    borderRadius: 13,
    height: "6.1%",
    width: "88.05%",
  },
  forgotPasswordText: {
    textAlign: "center",
    color: Color.white,
    textTransform: "capitalize",
    position: "absolute",
  },
  rectangleViewLayout: {
    width: 387,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  weHaveSendTypo: {
    lineHeight: 20,
    fontSize: FontSize.paragraphRegular_size,
    left: 40,
    textAlign: "center",
    textTransform: "capitalize",
    width: 364,
    position: "absolute",
  },
  vectorIconPosition4: {
    left: "47.8%",
    right: "46.43%",
    width: "5.77%",
  },
  vectorIconPosition3: {
    bottom: "62.57%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIconLayout: {
    left: "49.73%",
    height: "0.12%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIconPosition: {
    bottom: "61.96%",
    top: "37.26%",
    height: "0.78%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  forgotPassword2Child: {
    top: 173,
    height: 110,
    width: 364,
    left: 30,
    position: "absolute",
  },
  forgotPassword: {
    top: 146,
    left: 57,
    fontSize: 48,
    fontFamily: FontFamily.sonder,
    width: 326,
    height: 55,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  forgotPassword2Item: {
    top: 351,
    left: 24,
    height: 48,
  },
  forgotPassword2Inner: {
    top: "47.47%",
    right: "6.5%",
    bottom: "46.43%",
    left: "5.45%",
    position: "absolute",
  },
  resetPassword: {
    height: "2.72%",
    width: "41.14%",
    top: "49.48%",
    left: "30.68%",
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.ralewaySemiBold,
    textAlign: "left",
    color: Color.white,
    textTransform: "capitalize",
    position: "absolute",
  },
  appsCircleIcon: {
    width: 24,
    height: 24,
  },
  menuicon: {
    top: 922,
    borderRadius: 40,
    backgroundColor: Color.colorWhitesmoke,
    width: 51,
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    left: 30,
    position: "absolute",
  },
  enterYourEmail: {
    top: 228,
    left: 62,
    fontSize: FontSize.size_13xl,
    lineHeight: 24,
    fontFamily: FontFamily.reenieBeanie,
    width: 315,
  },
  rectangleView: {
    top: 513,
    left: 29,
    borderRadius: 16,
    backgroundColor: Color.white,
    height: 229,
  },
  ellipseIcon: {
    height: "5.33%",
    width: "11.82%",
    top: "34.21%",
    right: "43.41%",
    bottom: "60.46%",
    left: "44.77%",
  },
  weHaveSend: {
    top: 681,
    fontFamily: FontFamily.poppinsRegular,
    color: "#707b81",
    height: 47,
  },
  checkYourEmail: {
    top: 649,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    color: Color.b2B2B,
    height: 23,
  },
  vectorIcon: {
    height: "1.5%",
    top: "36.59%",
    bottom: "61.91%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "1.07%",
    top: "36.36%",
    left: "47.8%",
    right: "46.43%",
    width: "5.77%",
  },
  vectorIcon2: {
    height: "1.78%",
    width: "3.48%",
    top: "35.65%",
    right: "47.59%",
    left: "48.93%",
  },
  vectorIcon3: {
    top: "36.05%",
    bottom: "63.84%",
    right: "48.39%",
    width: "1.89%",
    left: "49.73%",
    height: "0.12%",
  },
  vectorIcon4: {
    width: "0.95%",
    top: "36.73%",
    right: "49.32%",
    bottom: "63.16%",
    left: "49.73%",
    height: "0.12%",
  },
  vectorIcon5: {
    top: "36.38%",
    bottom: "63.5%",
    right: "48.39%",
    width: "1.89%",
    left: "49.73%",
    height: "0.12%",
  },
  vectorIcon6: {
    width: "2.07%",
    right: "50%",
    left: "47.93%",
  },
  vectorIcon7: {
    width: "2.09%",
    right: "46.55%",
    left: "51.36%",
  },
  forgotPassword2: {
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

export default ForgotPassword;
