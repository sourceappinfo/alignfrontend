import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import Icon1 from 'components/Icon1';  // Use the alias 'components' for Icon1
import {
  Color,
  FontFamily,
  Border,
  FontSize,
  Padding,
  Gap,
} from 'GlobalStyles';  // Use the 'GlobalStyles' alias

const Cards = ({
  metaText = 'User Rating ',
  value = '78%',
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
      colors={['#102a43', '#286aa9']}
    >
      <View style={styles.content}>
        <View style={styles.content}>
          {leftIcon && (
            <View style={styles.iconL}>
              <Icon1 icon={require('assets/icon.png')} />  {/* Use 'assets' alias */}
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
                      <Text style={styles.text2}>{'▴ '}</Text>
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
                  source={require('assets/ellipse-16.png')}  
                />
                <Image
                  style={[styles.avatarsItem, styles.avatarsLayout]}
                  contentFit="cover"
                  source={require('assets/ellipse-17.png')} 
                />
                <Image
                  style={[styles.avatarsItem, styles.avatarsLayout]}
                  contentFit="cover"
                  source={require('assets/ellipse-18.png')} 
                />
                <Image
                  style={[styles.avatarsItem, styles.avatarsLayout]}
                  contentFit="cover"
                  source={require('assets/ellipse-19.png')}  
                />
              </View>
            )}
            {rightIcon && (
              <View style={styles.iconL}>
                <Icon1 icon={require('assets/icon.png')} />  
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
              <Icon1 icon={require('assets/icon1.png')} />  {/* Use 'assets' alias */}
              <Text style={[styles.label, styles.labelTypo]}>Add Comments</Text>
            </View>
          )}
          {rightButton && (
            <View style={styles.right1}>
              <Text style={[styles.label1, styles.labelTypo]}>Comments</Text>
              <Icon1 icon={require('assets/icon2.png')} />  {/* Use 'assets' alias */}
            </View>
          )}
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  avatars: {
    flexDirection: 'row',
  },
  avatarsItem: {
    marginLeft: -12,
  },
  avatarsLayout: {
    height: 32,
    width: 32,
  },
  badge: {
    alignItems: 'center',
    backgroundColor: Color.colorHoneydew,
    borderRadius: Border.br_9xs,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_11xs,
  },
  bg: {
    alignSelf: 'stretch',
    backgroundColor: Color.d500,
    justifyContent: 'center',
  },
  bgLayout: {
    borderRadius: Border.br_31xl,
    overflow: 'hidden',
  },
  buttons: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
  },
  cards: {
    backgroundColor: 'transparent',
    borderRadius: Border.br_5xs,
    gap: Gap.gap_lg,
    height: 299,
    left: 14,
    padding: Padding.p_base,
    position: 'absolute',
    top: 10386,
    width: 412,
  },
  colorBar: {
    alignItems: 'center',
    backgroundColor: Color.blue,
    height: 4,
    width: 109,
  },
  content: {
    alignSelf: 'stretch',
    gap: Gap.gap_md,
  },
  header: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    gap: Gap.gap_md,
  },
  iconL: {
    backgroundColor: Color.d800,
    borderRadius: Border.br_5xs,
    flexDirection: 'row',
    padding: Padding.p_5xs,
  },
  label: {
    textAlign: 'left',
  },
  label1: {
    textAlign: 'right',
  },
  labelTypo: {
    color: Color.white,
    fontFamily: FontFamily.latoBold,
    fontSize: FontSize.size_mini,
    fontWeight: '600',
    letterSpacing: 1,
  },
  left: {
    color: Color.white,
    fontFamily: FontFamily.captionRegular,
    fontSize: FontSize.captionRegular_size,
    textAlign: 'left',
  },
  left1: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: Gap.gap_md,
  },
  loremIpsum: {
    color: Color.n400,
    fontFamily: FontFamily.captionRegular,
    fontSize: FontSize.paragraphRegular_size,
    height: 19,
    letterSpacing: 1,
    textAlign: 'left',
  },
  metaInfo: {
    alignSelf: 'stretch',
    color: Color.n400,
    fontSize: FontSize.captionRegular_size,
    textAlign: 'left',
  },
  metaInfoTypo: {
    color: Color.n400,
    fontFamily: FontFamily.captionRegular,
    letterSpacing: 1,
    textAlign: 'left',
  },
  metavalueContainer: {
    flex: 1,
    gap: Gap.gap_sm,
  },
  progress: {
    justifyContent: 'center',
  },
  progressBar: {
    alignSelf: 'stretch',
    gap: Gap.gap_sm,
  },
  progressFlexBox: {
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
  right: {
    color: Color.white,
    fontFamily: FontFamily.captionRegular,
    fontSize: FontSize.captionRegular_size,
    textAlign: 'right',
  },
  right1: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: Gap.gap_md,
    justifyContent: 'flex-end',
  },
  text: {
    fontFamily: FontFamily.valueExtrabold,
    fontSize: FontSize.valueExtrabold_size,
    fontWeight: '800',
    textAlign: 'left',
  },
  text1: {
    color: Color.colorSeagreen,
    fontSize: FontSize.size_3xs,
    letterSpacing: 1,
    textAlign: 'right',
  },
  text2: {
    fontFamily: FontFamily.latoLight,
    fontWeight: '500',
  },
  text3: {
    fontFamily: FontFamily.latoBold,
    fontWeight: '600',
  },
  textClr: {
    color: Color.white,
    letterSpacing: 1,
  },
  value: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    gap: Gap.gap_lg,
  },
  value1: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Cards;
