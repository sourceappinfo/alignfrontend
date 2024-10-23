import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import Icon1 from "components/Icon1";  // Use the alias 'components' for Icon1
import {
  Color,
  FontFamily,
  Border,
  FontSize,
  Padding,
  Gap,
} from "GlobalStyles";  // Use the 'GlobalStyles' alias

const Cards = ({
  metaText = "User Rating ",
  value = "78%",
  avatars = true,
  badge = true,
  leftButton = true,
  leftIcon = true,
  metaInfo = true,
  progressBar = true,
  rightButton = true,
  rightIcon = true,
  showButtons = true,
  text,
}) => {
  return (
    <LinearGradient
      style={styles.cards}
      locations={[0, 1]}
      colors={["#102a43", "#286aa9"]}
    >
      <View style={styles.content}>
        <View style={styles.content}>
          {leftIcon && (
            <View style={styles.iconL}>
              <Icon1 icon={require("assets/icon.png")} />  {/* Use 'assets' alias */}
            </View>
          )}
          <View style={styles.header}>
            <View style={styles.metavalueContainer}>
              {metaInfo && (
                <Text style={[styles.metaInfo, styles.metaInfoTypo]}>
                  {metaText}
                </Text>
              )}
              <View style={styles.value}>
                <Text style={[styles.text, styles.textClr]}>{value}</Text>
                {badge && (
                  <View style={styles.badge}>
                    <Text style={styles.text1}>
                      <Text style={styles.text2}>{`▴ `}</Text>
                      <Text style={styles.text3}>100.00%</Text>
                    </Text>
                  </View>
                )}
              </View>
            </View>
            {avatars && (
              <View style={styles.avatars}>
                <Image
                  style={styles.avatarsLayout}
                  contentFit="cover"
                  source={require("assets/ellipse-16.png")}  
                />
                <Image
                  style={[styles.avatarsItem, styles.avatarsLayout]}
                  contentFit="cover"
                  source={require("assets/ellipse-17.png")} 
                />
                <Image
                  style={[styles.avatarsItem, styles.avatarsLayout]}
                  contentFit="cover"
                  source={require("assets/ellipse-18.png")} 
                />
                <Image
                  style={[styles.avatarsItem, styles.avatarsLayout]}
                  contentFit="cover"
                  source={require("assets/ellipse-19.png")}  
                />
              </View>
            )}
            {rightIcon && (
              <View style={styles.iconL}>
                <Icon1 icon={require("assets/icon.png")} />  
              </View>
            )}
          </View>
        </View>
        <Text style={[styles.loremIpsum, styles.progressFlexBox]}>{text}</Text>
      </View>
      {progressBar && (
        <View style={styles.progressBar}>
          <View style={styles.value1}>
            <Text style={[styles.left, styles.textClr]}>
              1245 users following this brand
            </Text>
            <Text style={[styles.right, styles.textClr]} />
          </View>
          <View style={[styles.progress, styles.progressFlexBox]}>
            <View style={[styles.bg, styles.bgLayout]}>
              <View style={[styles.colorBar, styles.bgLayout]} />
            </View>
          </View>
        </View>
      )}
      {showButtons && (
        <View style={styles.buttons}>
          {leftButton && (
            <View style={styles.left1}>
              <Icon1 icon={require("assets/icon1.png")} />  {/* Use 'assets' alias */}
              <Text style={[styles.label, styles.labelTypo]}>Add Comments</Text>
            </View>
          )}
          {rightButton && (
            <View style={styles.right1}>
              <Text style={[styles.label1, styles.labelTypo]}>Comments</Text>
              <Icon1 icon={require("assets/icon2.png")} />  {/* Use 'assets' alias */}
            </View>
          )}
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  metaInfoTypo: {
    color: Color.n400,
    textAlign: "left",
    fontFamily: FontFamily.captionRegular,
    letterSpacing: 1,
  },
  textClr: {
    color: Color.white,
    letterSpacing: 1,
  },
  avatarsLayout: {
    height: 32,
    width: 32,
  },
  progressFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  bgLayout: {
    borderRadius: Border.br_31xl,
    overflow: "hidden",
  },
  labelTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
    color: Color.white,
    letterSpacing: 1,
  },
  iconL: {
    backgroundColor: Color.d800,
    padding: Padding.p_5xs,
    flexDirection: "row",
    borderRadius: Border.br_5xs,
  },
  metaInfo: {
    textAlign: "left",
    fontSize: FontSize.captionRegular_size,
    color: Color.n400,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.valueExtrabold_size,
    fontWeight: "800",
    fontFamily: FontFamily.valueExtrabold,
    textAlign: "left",
  },
  text2: {
    fontWeight: "500",
    fontFamily: FontFamily.latoLight,
  },
  text3: {
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
  },
  text1: {
    fontSize: FontSize.size_3xs,
    color: Color.colorSeagreen,
    textAlign: "right",
    letterSpacing: 1,
  },
  badge: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorHoneydew,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_11xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  value: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    gap: Gap.gap_lg,
  },
  metavalueContainer: {
    gap: Gap.gap_sm,
    flex: 1,
  },
  avatarsItem: {
    marginLeft: -12,
  },
  avatars: {
    flexDirection: "row",
  },
  header: {
    flexDirection: "row",
    gap: Gap.gap_md,
    alignSelf: "stretch",
  },
  content: {
    gap: Gap.gap_md,
    alignSelf: "stretch",
  },
  loremIpsum: {
    fontSize: FontSize.paragraphRegular_size,
    height: 19,
    textAlign: "left",
    color: Color.n400,
    fontFamily: FontFamily.captionRegular,
    letterSpacing: 1,
  },
  left: {
    textAlign: "left",
    fontFamily: FontFamily.captionRegular,
    color: Color.white,
    fontSize: FontSize.captionRegular_size,
  },
  right: {
    textAlign: "right",
    fontFamily: FontFamily.captionRegular,
    color: Color.white,
    fontSize: FontSize.captionRegular_size,
  },
  value1: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  colorBar: {
    backgroundColor: Color.blue,
    width: 109,
    height: 4,
    alignItems: "center",
  },
  bg: {
    backgroundColor: Color.d500,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  progress: {
    justifyContent: "center",
  },
  progressBar: {
    gap: Gap.gap_sm,
    alignSelf: "stretch",
  },
  label: {
    textAlign: "left",
  },
  left1: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    gap: Gap.gap_md,
  },
  label1: {
    textAlign: "right",
  },
  right1: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    gap: Gap.gap_md,
  },
  buttons: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  cards: {
    position: "absolute",
    top: 10386,
    left: 14,
    width: 412,
    height: 299,
    padding: Padding.p_base,
    backgroundColor: "transparent",
    gap: Gap.gap_lg,
    borderRadius: Border.br_5xs,
  },
});

export default Cards;
