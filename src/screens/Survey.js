import React, { useRef } from 'react';
import { Text, StyleSheet, View, ScrollView, Image, ImageBackground } from "react-native";
import { Color, FontFamily, FontSize, Border } from "GlobalStyles";
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

// Import your background image here
const backgroundImage = require('assets/productdatabackdrop.jpg');

const Survey = ({ navigation }) => {
  const translateX = useSharedValue(0);
  const scrollViewRef = useRef(null);

  // Swipe gesture handler
  const panGesture = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: (event) => {
      if (event.translationX < -50) {
        navigation.navigate('NextScreen'); // Replace with the next screen name
      } else if (event.translationX > 50) {
        navigation.goBack(); // Go back to the previous screen
      }
      translateX.value = withTiming(0);
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={panGesture}>
      <Animated.View style={[{ flex: 1 }, rStyle]}>
        <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
          <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.survey}>
              <Text style={styles.align}>{`ALIGN.`}</Text>
              <Text style={styles.personalizationSurvey}>{`Personalization Survey`}</Text>

              {/* Add your image content */}
              <Image
                style={[styles.surveyChild, styles.surveyLayout]}
                contentFit="cover"
                source={require("assets/rectangle-4262.png")}
              />
              <Image
                style={[styles.surveyItem, styles.surveyLayout]}
                contentFit="cover"
                source={require("assets/rectangle-4247.png")}
              />
              <Image
                style={[styles.surveyInner, styles.surveyLayout]}
                contentFit="cover"
                source={require("assets/rectangle-42621.png")}
              />
              <Image
                style={[styles.rectangleIcon, styles.surveyLayout]}
                contentFit="cover"
                source={require("assets/rectangle-4267.png")}
              />
      <Text style={styles.align}>{`ALIGN. `}</Text>
      <Text
        style={styles.personalizationSurvey}
      >{`Personalization Survey  `}</Text>
      <View style={[styles.view, styles.viewLayout]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-2.png")}
        />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={[styles.view1, styles.viewLayout]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-4.png")}
        />
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.view2, styles.viewLayout]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-5.png")}
        />
        <Text style={styles.text}>4</Text>
      </View>
      <View style={[styles.view3, styles.viewLayout]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-6.png")}
        />
        <Text style={styles.text}>5</Text>
      </View>
      <View style={[styles.view4, styles.viewPosition16]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-2.png")}
        />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={[styles.view5, styles.viewPosition16]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-3.png")}
        />
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.view6, styles.viewLayout]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-31.png")}
        />
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.view7, styles.viewPosition16]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-4.png")}
        />
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.view8, styles.viewPosition16]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-5.png")}
        />
        <Text style={styles.text}>4</Text>
      </View>
      <View style={[styles.view9, styles.viewPosition16]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-6.png")}
        />
        <Text style={styles.text}>5</Text>
      </View>
      <View style={[styles.view10, styles.viewPosition15]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-2.png")}
        />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={[styles.view11, styles.viewPosition15]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-3.png")}
        />
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.view12, styles.viewPosition15]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-4.png")}
        />
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.view13, styles.viewPosition15]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-5.png")}
        />
        <Text style={styles.text}>4</Text>
      </View>
      <View style={[styles.view14, styles.viewPosition15]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-6.png")}
        />
        <Text style={styles.text}>5</Text>
      </View>
      <View style={[styles.view15, styles.viewPosition14]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-2.png")}
        />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={[styles.view16, styles.viewPosition14]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-3.png")}
        />
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.view17, styles.viewPosition14]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-4.png")}
        />
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.view18, styles.viewPosition14]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-5.png")}
        />
        <Text style={styles.text}>4</Text>
      </View>
      <View style={[styles.view19, styles.viewPosition14]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-6.png")}
        />
        <Text style={styles.text}>5</Text>
      </View>
      <View style={[styles.view20, styles.viewPosition13]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-2.png")}
        />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={[styles.view21, styles.viewPosition13]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-3.png")}
        />
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.view22, styles.viewPosition13]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-4.png")}
        />
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.view23, styles.viewPosition13]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-5.png")}
        />
        <Text style={styles.text}>4</Text>
      </View>
      <View style={[styles.view24, styles.viewPosition13]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-6.png")}
        />
        <Text style={styles.text}>5</Text>
      </View>
      <View style={[styles.view25, styles.viewPosition12]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-2.png")}
        />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={[styles.view26, styles.viewPosition12]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-3.png")}
        />
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.view27, styles.viewPosition12]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-4.png")}
        />
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.view28, styles.viewPosition12]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-5.png")}
        />
        <Text style={styles.text}>4</Text>
      </View>
      <View style={[styles.view29, styles.viewPosition12]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-6.png")}
        />
        <Text style={styles.text}>5</Text>
      </View>
      <View style={[styles.view30, styles.viewPosition11]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-2.png")}
        />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={[styles.view31, styles.viewPosition11]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-3.png")}
        />
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.view32, styles.viewPosition11]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-4.png")}
        />
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.view33, styles.viewPosition11]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-5.png")}
        />
        <Text style={styles.text}>4</Text>
      </View>
      <View style={[styles.view34, styles.viewPosition10]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-3.png")}
        />
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.view35, styles.viewPosition10]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-4.png")}
        />
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.view36, styles.viewPosition10]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-5.png")}
        />
        <Text style={styles.text}>4</Text>
      </View>
      <View style={[styles.view37, styles.viewPosition10]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-6.png")}
        />
        <Text style={styles.text}>5</Text>
      </View>
      <Text style={[styles.whatValuesAre, styles.whatTypo]}>
        What values are most important to you when choosing a company or
        product? (Select all that apply)
      </Text>
      <Text style={[styles.environmentalProtectionsusta, styles.communityTypo]}>
        Environmental Protection/Sustainability
      </Text>
      <Text style={[styles.socialJustice, styles.communityTypo]}>
        Social justice
      </Text>
      <Text style={[styles.humanRights, styles.communityTypo]}>
        Human rights
      </Text>
      <Text style={[styles.fairLaborPractices, styles.communityTypo]}>
        Fair labor practices
      </Text>
      <Text
        style={[styles.supplyChainEthics, styles.communityTypo]}
      >{`Supply chain ethics `}</Text>
      <Text style={[styles.communityInvolvement, styles.communityTypo]}>
        Community involvement
      </Text>
      <Text style={[styles.diversityAndInclusion, styles.communityTypo]}>
        Diversity and inclusion
      </Text>
      <Text style={[styles.innovationAndTechnology, styles.communityTypo]}>
        Innovation and technology
      </Text>
      <Text style={[styles.animalWelfare, styles.communityTypo]}>
        Animal welfare
      </Text>
      <Text style={[styles.politicalAffiliations, styles.communityTypo]}>
        Political affiliations
      </Text>
      <Text style={[styles.brandReputation, styles.priceTypo]}>
        Brand reputation
      </Text>
      <Text style={[styles.price, styles.priceTypo]}>Price</Text>
      <Text style={[styles.ethicalPractices, styles.priceTypo]}>
        Ethical practices
      </Text>
      <Text style={[styles.environmentalImpact, styles.priceTypo]}>
        Environmental impact
      </Text>
      <Text style={[styles.productQuality, styles.priceTypo]}>
        Product quality
      </Text>
      <Text style={[styles.recommendationsFromFriendsf, styles.priceTypo]}>
        Recommendations from friends/family
      </Text>
      <Text style={[styles.politicalAffiliations1, styles.priceTypo]}>
        Political affiliations
      </Text>
      <Text style={[styles.clothing, styles.priceTypo]}>Clothing</Text>
      <Text style={[styles.foodAndBeverage, styles.priceTypo]}>
        Food and Beverage
      </Text>
      <Text style={[styles.householdGoods, styles.priceTypo]}>
        Household goods
      </Text>
      <Text style={[styles.personalCareProducts, styles.priceTypo]}>
        Personal care products
      </Text>
      <Text style={[styles.electronics, styles.priceTypo]}>Electronics</Text>
      <Text style={[styles.howWouldYou, styles.whatTypo]}>
        How would you rate the importance of these values? (1-5 scale)
      </Text>
      <Text style={[styles.howOftenDo, styles.howOftenDoTypo]}>
        How often do you purchase products from the following categories?
        (Select one for each category)
      </Text>
      <Text style={[styles.whatFactorsInfluence, styles.whatTypo]}>
        What factors influence your purchasing decisions? (Select all that
        apply)
      </Text>
      <Text style={[styles.environmentalProtectionSust, styles.animalTypo]}>
        Environmental protection/ sustainability
      </Text>
      <Text style={[styles.supplyChainEthics1, styles.animalTypo]}>
        Supply chain ethics
      </Text>
      <Text style={[styles.socialJustice1, styles.humanRights1Typo]}>
        Social justice
      </Text>
      <Text style={[styles.communityInvolvement1, styles.communityTypo]}>
        Community involvement
      </Text>
      <Text style={[styles.fairLaborPractices1, styles.humanRights1Typo]}>
        Fair labor practices
      </Text>
      <Text style={[styles.innovationAndTechnology1, styles.animalTypo]}>
        Innovation and technology
      </Text>
      <Text style={[styles.diversityAndInclusion1, styles.animalTypo]}>
        Diversity and inclusion
      </Text>
      <Text style={[styles.humanRights1, styles.humanRights1Typo]}>
        Human rights
      </Text>
      <Text style={[styles.animalWelfare1, styles.animalTypo]}>
        Animal welfare
      </Text>
      <View style={[styles.view38, styles.viewPosition9]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-2.png")}
        />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={[styles.view39, styles.viewPosition9]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-3.png")}
        />
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.view40, styles.viewPosition9]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-4.png")}
        />
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.view41, styles.viewPosition9]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-5.png")}
        />
        <Text style={styles.text}>4</Text>
      </View>
      <View style={[styles.view42, styles.viewPosition9]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-6.png")}
        />
        <Text style={styles.text}>5</Text>
      </View>
      <Text style={[styles.politicalAffiliations2, styles.animalTypo]}>
        Political affiliations
      </Text>
      <View style={[styles.pexelsBenanSude15692672227, styles.pexelsLayout]} />
      <Text style={[styles.ethicalAndSustainability, styles.andTypo]}>
        Ethical and sustainability ratings
      </Text>
      <Text style={[styles.companyHistoryAnd, styles.andTypo]}>
        Company history and values
      </Text>
      <Text
        style={[styles.recentNewsAnd, styles.andTypo]}
      >{`Recent news and media `}</Text>
      <Text
        style={[styles.customerReviews, styles.andTypo]}
      >{`Customer reviews `}</Text>
      <Text style={[styles.financialPerformance, styles.andTypo]}>
        Financial performance
      </Text>
      <Text style={[styles.recommendationsFromFriendsf1, styles.andTypo]}>
        Recommendations from friends/family
      </Text>
      <Text
        style={[styles.honestyAndTransparency, styles.textTypo]}
      >{`Honesty and transparency `}</Text>
      <Text style={[styles.whatFactorsInfluence1, styles.whatLayout]}>
        What factors influence your purchasing decisions? (Select all that
        apply)
      </Text>
      <View style={[styles.pexelsBenanSude156926722271, styles.pexelsLayout]} />
      <Text style={[styles.yes, styles.noTypo]}>Yes</Text>
      <Text style={[styles.no, styles.noTypo]}>No</Text>
      <Text style={[styles.maybe, styles.noTypo]}>Maybe</Text>
      <Text style={[styles.areYouActively, styles.howOftenDoTypo]}>
        Are you actively looking to support companies with specific ethical
        practices?
      </Text>
      <View
        style={[styles.pexelsBenanSude156926722272, styles.pexelsPosition]}
      />
      <Text style={[styles.environmentalViolations, styles.andTypo]}>
        Environmental violations
      </Text>
      <Text style={[styles.poorTreatmentOf, styles.andTypo]}>
        Poor treatment of employees
      </Text>
      <Text style={[styles.humanRightsViolations, styles.andTypo]}>
        Human rights violations
      </Text>
      <Text
        style={[styles.unsustainablePractices, styles.andTypo]}
      >{`Unsustainable practices `}</Text>
      <Text
        style={[styles.employeeIncomeInequaility, styles.andTypo]}
      >{`Employee income inequaility `}</Text>
      <Text style={[styles.lackOfTransparency, styles.andTypo]}>
        Lack of transparency
      </Text>
      <Text style={[styles.negativeMediaCoverage, styles.communityTypo]}>
        Negative media coverage
      </Text>
      <Text style={[styles.politicalAffiliations3, styles.communityTypo]}>
        Political affiliations
      </Text>
      <Text style={[styles.poorProductQuality, styles.communityTypo]}>
        Poor product quality
      </Text>
      <Text style={[styles.whatWouldMake, styles.onAScaleTypo]}>
        What would make you stop supporting a company? (Select all that apply)
      </Text>
      <Text style={[styles.howKnowledgeableAre, styles.onAScaleTypo]}>
        How knowledgeable are you about the following topics? (Rate each topic
        on a scale from 1 to 5)
      </Text>
      <Text
        style={[styles.corporateSocialResponsibilit, styles.animalTypo]}
      >{`Corporate social responsibility `}</Text>
      <View style={[styles.view43, styles.viewPosition8]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-2.png")}
        />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={[styles.view44, styles.viewPosition8]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-3.png")}
        />
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.view45, styles.viewPosition8]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-4.png")}
        />
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.view46, styles.viewPosition8]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-5.png")}
        />
        <Text style={styles.text}>4</Text>
      </View>
      <View style={[styles.view47, styles.viewPosition8]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-6.png")}
        />
        <Text style={styles.text}>5</Text>
      </View>
      <Text
        style={[styles.environmentalSocialAnd, styles.animalTypo]}
      >{`Environmental, social, and governance `}</Text>
      <View style={[styles.view48, styles.viewPosition7]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-2.png")}
        />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={[styles.view49, styles.viewPosition7]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-3.png")}
        />
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.view50, styles.viewPosition7]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-4.png")}
        />
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.view51, styles.viewPosition7]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-5.png")}
        />
        <Text style={styles.text}>4</Text>
      </View>
      <View style={[styles.view52, styles.viewPosition7]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-6.png")}
        />
        <Text style={styles.text}>5</Text>
      </View>
      <Text style={[styles.fairTradePractices, styles.animalTypo]}>
        Fair trade practices
      </Text>
      <View style={[styles.view53, styles.viewPosition6]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-2.png")}
        />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={[styles.view54, styles.viewPosition6]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-3.png")}
        />
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.view55, styles.viewPosition6]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-4.png")}
        />
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.view56, styles.viewPosition6]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-5.png")}
        />
        <Text style={styles.text}>4</Text>
      </View>
      <View style={[styles.view57, styles.viewPosition6]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-6.png")}
        />
        <Text style={styles.text}>5</Text>
      </View>
      <View style={[styles.view58, styles.viewPosition5]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-2.png")}
        />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={[styles.view59, styles.viewPosition5]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-3.png")}
        />
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.view60, styles.viewPosition5]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-4.png")}
        />
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.view61, styles.viewPosition5]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-5.png")}
        />
        <Text style={styles.text}>4</Text>
      </View>
      <View style={[styles.view62, styles.viewPosition5]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-6.png")}
        />
        <Text style={styles.text}>5</Text>
      </View>
      <Text style={[styles.humanRights2, styles.animalTypo]}>Human rights</Text>
      <Text
        style={[styles.supplyChainEthics2, styles.animalTypo]}
      >{`Supply chain ethics `}</Text>
      <View style={[styles.view63, styles.viewPosition4]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-2.png")}
        />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={[styles.view64, styles.viewPosition4]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-3.png")}
        />
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.view65, styles.viewPosition4]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-4.png")}
        />
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.view66, styles.viewPosition4]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-5.png")}
        />
        <Text style={styles.text}>4</Text>
      </View>
      <View style={[styles.view67, styles.viewPosition4]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-6.png")}
        />
        <Text style={styles.text}>5</Text>
      </View>
      <Text style={[styles.animalWelfareStandards, styles.animalTypo]}>
        Animal welfare standards
      </Text>
      <View style={[styles.view68, styles.viewPosition3]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-2.png")}
        />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={[styles.view69, styles.viewPosition3]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-3.png")}
        />
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.view70, styles.viewPosition3]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-4.png")}
        />
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.view71, styles.viewPosition3]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-5.png")}
        />
        <Text style={styles.text}>4</Text>
      </View>
      <View style={[styles.view72, styles.viewPosition3]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-6.png")}
        />
        <Text style={styles.text}>5</Text>
      </View>
      <Text style={[styles.innovationAndTechnology2, styles.animalTypo]}>
        Innovation and technology
      </Text>
      <View style={[styles.view73, styles.viewPosition2]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-2.png")}
        />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={[styles.view74, styles.viewPosition2]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-3.png")}
        />
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.view75, styles.viewPosition2]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-4.png")}
        />
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.view76, styles.viewPosition2]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-5.png")}
        />
        <Text style={styles.text}>4</Text>
      </View>
      <View style={[styles.view77, styles.viewPosition2]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-6.png")}
        />
        <Text style={styles.text}>5</Text>
      </View>
      <Text style={[styles.diversityAndInclusion2, styles.animalTypo]}>
        Diversity and inclusion
      </Text>
      <View style={[styles.view78, styles.viewPosition1]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-2.png")}
        />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={[styles.view79, styles.viewPosition1]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-3.png")}
        />
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.view80, styles.viewPosition1]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-4.png")}
        />
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.view81, styles.viewPosition1]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-5.png")}
        />
        <Text style={styles.text}>4</Text>
      </View>
      <View style={[styles.view82, styles.viewPosition1]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-6.png")}
        />
        <Text style={styles.text}>5</Text>
      </View>
      <View style={[styles.view83, styles.viewPosition]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-2.png")}
        />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={[styles.view84, styles.viewPosition]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-3.png")}
        />
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.view85, styles.viewPosition]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-4.png")}
        />
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.view86, styles.viewPosition]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-5.png")}
        />
        <Text style={styles.text}>4</Text>
      </View>
      <View style={[styles.view87, styles.viewPosition]}>
        <Image
          style={[styles.child, styles.viewLayout]}
          contentFit="cover"
          source={require("assets/ellipse-6.png")}
        />
        <Text style={styles.text}>5</Text>
      </View>
      <View
        style={[styles.pexelsBenanSude156926722273, styles.pexelsPosition]}
      />
      <Text style={[styles.always, styles.textTypo]}>Always</Text>
      <Text style={[styles.often, styles.textTypo]}>Often</Text>
      <Text style={[styles.sometimes, styles.textTypo]}>Sometimes</Text>
      <Text style={[styles.rarely, styles.textTypo]}>Rarely</Text>
      <Text style={[styles.never, styles.textTypo]}>Never</Text>
      <Text style={[styles.howOftenDo1, styles.doYouHaveTypo]}>
        How often do you make purchasing decisions based on a company's ethical
        practices?
      </Text>
      <View
        style={[styles.pexelsBenanSude156926722274, styles.pexelsPosition]}
      />
      <Text style={[styles.notImportant, styles.textTypo]}>
        1 (Not important)
      </Text>
      <Text style={[styles.text88, styles.textTypo]}>2</Text>
      <Text style={[styles.text89, styles.textTypo]}>3</Text>
      <Text style={[styles.text90, styles.textTypo]}>4</Text>
      <Text style={[styles.veryImportant, styles.textTypo]}>
        5 (Very important)
      </Text>
      <Text style={[styles.onAScale, styles.onAScaleTypo]}>
        On a scale from 1 to 5, how important is it for you to align your
        purchases with your values?
      </Text>
      <Text style={[styles.doYouHave, styles.doYouHaveTypo]}>
        Do you have any specific companies in mind that you would like to
        support?
      </Text>
      </View>
          </ScrollView>
        </ImageBackground>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: 'center',
    },
  surveyLayout: {
    width: 403,
    borderRadius: Border.br_sm,
    position: "absolute",
    left: 12,
  },
  viewLayout: {
    height: 24,
    width: 26,
    position: "absolute",
  },
  viewPosition16: {
    top: 900,
    height: 24,
    width: 26,
    position: "absolute",
  },
  viewPosition15: {
    top: 1046,
    height: 24,
    width: 26,
    position: "absolute",
  },
  viewPosition14: {
    top: 1354,
    height: 24,
    width: 26,
    position: "absolute",
  },
  viewPosition13: {
    top: 1504,
    height: 24,
    width: 26,
    position: "absolute",
  },
  viewPosition12: {
    top: 1428,
    height: 24,
    width: 26,
    position: "absolute",
  },
  viewPosition11: {
    top: 1203,
    height: 24,
    width: 26,
    position: "absolute",
  },
  viewPosition10: {
    top: 972,
    height: 24,
    width: 26,
    position: "absolute",
  },
  whatTypo: {
    textAlign: "left",
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: 20,
    color: Color.white,
    position: "absolute",
  },
  communityTypo: {
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: 20,
    color: Color.white,
    position: "absolute",
  },
  priceTypo: {
    left: 78,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: 20,
    color: Color.white,
    position: "absolute",
  },
  howOftenDoTypo: {
    width: 392,
    left: 31,
    textAlign: "left",
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: 20,
    color: Color.white,
    position: "absolute",
  },
  animalTypo: {
    letterSpacing: -1.1,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
    textAlign: "left",
    fontSize: 20,
    color: Color.white,
    position: "absolute",
  },
  humanRights1Typo: {
    left: 83,
    letterSpacing: -1.1,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    lineHeight: 18,
    textAlign: "left",
    fontSize: 20,
    color: Color.white,
    position: "absolute",
  },
  viewPosition9: {
    top: 1277,
    height: 24,
    width: 26,
    position: "absolute",
  },
  pexelsLayout: {
    height: 830,
    width: 1105,
    position: "absolute",
  },
  andTypo: {
    left: 70,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: 20,
    color: Color.white,
    position: "absolute",
  },
  textTypo: {
    left: 71,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_lg,
    color: Color.white,
    position: "absolute",
  },
  whatLayout: {
    width: 372,
    left: 31,
  },
  noTypo: {
    fontFamily: FontFamily.ralewayLight,
    fontWeight: "300",
    left: 70,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    color: Color.white,
    position: "absolute",
  },
  pexelsPosition: {
    left: 622,
    height: 830,
    width: 1105,
    position: "absolute",
  },
  onAScaleTypo: {
    letterSpacing: -1.2,
    textAlign: "left",
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    color: Color.white,
    position: "absolute",
  },
  viewPosition8: {
    top: 2440,
    height: 24,
    width: 26,
    position: "absolute",
  },
  viewPosition7: {
    top: 2525,
    height: 24,
    width: 26,
    position: "absolute",
  },
  viewPosition6: {
    top: 2611,
    height: 24,
    width: 26,
    position: "absolute",
  },
  viewPosition5: {
    top: 2697,
    height: 24,
    width: 26,
    position: "absolute",
  },
  viewPosition4: {
    top: 2781,
    height: 24,
    width: 26,
    position: "absolute",
  },
  viewPosition3: {
    top: 2874,
    height: 24,
    width: 26,
    position: "absolute",
  },
  viewPosition2: {
    top: 2957,
    height: 24,
    width: 26,
    position: "absolute",
  },
  viewPosition1: {
    top: 3045,
    height: 24,
    width: 26,
    position: "absolute",
  },
  viewPosition: {
    top: 1124,
    height: 24,
    width: 26,
    position: "absolute",
  },
  doYouHaveTypo: {
    width: 373,
    letterSpacing: -1.2,
    textAlign: "left",
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    color: Color.white,
    position: "absolute",
  },
  surveyChild: {
    top: 4266,
    height: 899,
  },
  surveyItem: {
    top: 194,
    height: 1373,
  },
  surveyInner: {
    top: 3127,
    height: 1121,
  },
  rectangleIcon: {
    top: 1592,
    height: 1504,
  },
  align: {
    top: 76,
    left: 98,
    fontSize: 68,
    lineHeight: 68,
    fontFamily: FontFamily.sonder,
    width: 238,
    transform: [
      {
        rotate: "-0.2deg",
      },
    ],
    height: 56,
    textAlign: "center",
    color: Color.white,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  personalizationSurvey: {
    top: 150,
    left: 55,
    letterSpacing: 1.2,
    fontFamily: FontFamily.ralewayRegular,
    width: 312,
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    transform: [
      {
        rotate: "-0.2deg",
      },
    ],
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 56,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  child: {
    top: 0,
    left: 0,
  },
  text: {
    top: 3,
    left: 8,
    fontFamily: FontFamily.overpassBold,
    width: 10,
    height: 11,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  view: {
    left: 87,
    top: 829,
    height: 24,
    width: 26,
  },
  view1: {
    left: 153,
    top: 829,
    height: 24,
    width: 26,
  },
  view2: {
    left: 186,
    top: 829,
    height: 24,
    width: 26,
  },
  view3: {
    left: 219,
    top: 829,
    height: 24,
    width: 26,
  },
  view4: {
    left: 85,
  },
  view5: {
    left: 118,
  },
  view6: {
    left: 121,
    top: 829,
    height: 24,
    width: 26,
  },
  view7: {
    left: 151,
  },
  view8: {
    left: 184,
  },
  view9: {
    left: 217,
  },
  view10: {
    left: 86,
  },
  view11: {
    left: 119,
  },
  view12: {
    left: 152,
  },
  view13: {
    left: 185,
  },
  view14: {
    left: 218,
  },
  view15: {
    left: 88,
  },
  view16: {
    left: 121,
  },
  view17: {
    left: 154,
  },
  view18: {
    left: 187,
  },
  view19: {
    left: 220,
  },
  view20: {
    left: 87,
  },
  view21: {
    left: 120,
  },
  view22: {
    left: 153,
  },
  view23: {
    left: 186,
  },
  view24: {
    left: 219,
  },
  view25: {
    left: 88,
  },
  view26: {
    left: 121,
  },
  view27: {
    left: 154,
  },
  view28: {
    left: 187,
  },
  view29: {
    left: 220,
  },
  view30: {
    left: 87,
  },
  view31: {
    left: 120,
  },
  view32: {
    left: 153,
  },
  view33: {
    left: 186,
  },
  view34: {
    left: 118,
  },
  view35: {
    left: 151,
  },
  view36: {
    left: 184,
  },
  view37: {
    left: 217,
  },
  whatValuesAre: {
    top: 214,
    width: 377,
    left: 20,
    fontFamily: FontFamily.ralewayBold,
  },
  environmentalProtectionsusta: {
    top: 292,
    width: 299,
    lineHeight: 18,
    left: 68,
    fontWeight: "500",
  },
  socialJustice: {
    top: 350,
    left: 68,
    fontWeight: "500",
  },
  humanRights: {
    top: 393,
    left: 68,
    fontWeight: "500",
  },
  fairLaborPractices: {
    top: 436,
    left: 68,
    fontWeight: "500",
  },
  supplyChainEthics: {
    top: 479,
    left: 68,
    fontWeight: "500",
  },
  communityInvolvement: {
    top: 522,
    left: 68,
    fontWeight: "500",
  },
  diversityAndInclusion: {
    top: 565,
    left: 68,
    fontWeight: "500",
  },
  innovationAndTechnology: {
    top: 608,
    left: 68,
    fontWeight: "500",
  },
  animalWelfare: {
    top: 651,
    left: 68,
    fontWeight: "500",
  },
  politicalAffiliations: {
    top: 691,
    left: 66,
  },
  brandReputation: {
    top: 1994,
  },
  price: {
    top: 2037,
  },
  ethicalPractices: {
    top: 2080,
  },
  environmentalImpact: {
    top: 2123,
  },
  productQuality: {
    top: 2166,
  },
  recommendationsFromFriendsf: {
    top: 2209,
    width: 279,
  },
  politicalAffiliations1: {
    top: 2272,
    width: 279,
  },
  clothing: {
    top: 1689,
    lineHeight: 18,
  },
  foodAndBeverage: {
    top: 1729,
  },
  householdGoods: {
    top: 1772,
  },
  personalCareProducts: {
    top: 1815,
  },
  electronics: {
    top: 1858,
  },
  howWouldYou: {
    top: 746,
    width: 385,
    left: 31,
  },
  howOftenDo: {
    top: 1606,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    width: 392,
  },
  whatFactorsInfluence: {
    top: 1918,
    width: 382,
    left: 31,
  },
  environmentalProtectionSust: {
    top: 800,
    left: 82,
  },
  supplyChainEthics1: {
    top: 1093,
    left: 85,
  },
  socialJustice1: {
    top: 871,
  },
  communityInvolvement1: {
    top: 1171,
    left: 85,
  },
  fairLaborPractices1: {
    top: 1017,
  },
  innovationAndTechnology1: {
    top: 1323,
    left: 86,
  },
  diversityAndInclusion1: {
    top: 1249,
    left: 84,
  },
  humanRights1: {
    top: 943,
  },
  animalWelfare1: {
    top: 1400,
    left: 86,
  },
  view38: {
    left: 87,
  },
  view39: {
    left: 120,
  },
  view40: {
    left: 153,
  },
  view41: {
    left: 186,
  },
  view42: {
    left: 219,
  },
  politicalAffiliations2: {
    top: 1474,
    left: 86,
  },
  pexelsBenanSude15692672227: {
    top: 2537,
    left: 629,
  },
  ethicalAndSustainability: {
    top: 3451,
  },
  companyHistoryAnd: {
    top: 3494,
  },
  recentNewsAnd: {
    top: 3537,
  },
  customerReviews: {
    top: 3580,
  },
  financialPerformance: {
    top: 3623,
  },
  recommendationsFromFriendsf1: {
    top: 3666,
    width: 279,
  },
  honestyAndTransparency: {
    top: 3734,
    width: 279,
  },
  whatFactorsInfluence1: {
    top: 3371,
    textAlign: "left",
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    color: Color.white,
    position: "absolute",
  },
  pexelsBenanSude156926722271: {
    top: 3923,
    left: 621,
  },
  yes: {
    top: 3226,
  },
  no: {
    top: 3269,
  },
  maybe: {
    top: 3312,
  },
  areYouActively: {
    top: 3146,
  },
  pexelsBenanSude156926722272: {
    top: 3735,
  },
  environmentalViolations: {
    top: 3855,
  },
  poorTreatmentOf: {
    top: 3898,
  },
  humanRightsViolations: {
    top: 3941,
  },
  unsustainablePractices: {
    top: 3984,
  },
  employeeIncomeInequaility: {
    top: 4027,
  },
  lackOfTransparency: {
    top: 4070,
    width: 279,
  },
  negativeMediaCoverage: {
    top: 4109,
    width: 279,
    left: 68,
    fontWeight: "500",
  },
  politicalAffiliations3: {
    top: 4194,
    width: 279,
    left: 68,
    fontWeight: "500",
  },
  poorProductQuality: {
    top: 4152,
    width: 279,
    left: 68,
    fontWeight: "500",
  },
  whatWouldMake: {
    top: 3783,
    width: 372,
    left: 31,
  },
  howKnowledgeableAre: {
    top: 2338,
    width: 367,
    left: 31,
  },
  corporateSocialResponsibilit: {
    top: 2414,
    left: 88,
  },
  view43: {
    left: 89,
  },
  view44: {
    left: 122,
  },
  view45: {
    left: 155,
  },
  view46: {
    left: 188,
  },
  view47: {
    left: 221,
  },
  environmentalSocialAnd: {
    top: 2499,
    left: 91,
  },
  view48: {
    left: 91,
  },
  view49: {
    left: 124,
  },
  view50: {
    left: 157,
  },
  view51: {
    left: 190,
  },
  view52: {
    left: 223,
  },
  fairTradePractices: {
    top: 2585,
    left: 92,
  },
  view53: {
    left: 95,
  },
  view54: {
    left: 128,
  },
  view55: {
    left: 161,
  },
  view56: {
    left: 194,
  },
  view57: {
    left: 227,
  },
  view58: {
    left: 95,
  },
  view59: {
    left: 128,
  },
  view60: {
    left: 161,
  },
  view61: {
    left: 194,
  },
  view62: {
    left: 227,
  },
  humanRights2: {
    top: 2669,
    left: 96,
  },
  supplyChainEthics2: {
    top: 2835,
    left: 97,
  },
  view63: {
    left: 97,
  },
  view64: {
    left: 130,
  },
  view65: {
    left: 163,
  },
  view66: {
    left: 196,
  },
  view67: {
    left: 229,
  },
  animalWelfareStandards: {
    top: 2754,
    left: 95,
  },
  view68: {
    left: 97,
  },
  view69: {
    left: 130,
  },
  view70: {
    left: 163,
  },
  view71: {
    left: 196,
  },
  view72: {
    left: 229,
  },
  innovationAndTechnology2: {
    top: 2930,
    left: 96,
  },
  view73: {
    left: 97,
  },
  view74: {
    left: 130,
  },
  view75: {
    left: 163,
  },
  view76: {
    left: 196,
  },
  view77: {
    left: 229,
  },
  diversityAndInclusion2: {
    top: 3021,
    left: 95,
  },
  view78: {
    left: 96,
  },
  view79: {
    left: 129,
  },
  view80: {
    left: 162,
  },
  view81: {
    left: 195,
  },
  view82: {
    left: 228,
  },
  view83: {
    left: 87,
  },
  view84: {
    left: 120,
  },
  view85: {
    left: 153,
  },
  view86: {
    left: 186,
  },
  view87: {
    left: 219,
  },
  pexelsBenanSude156926722273: {
    top: 4432,
  },
  always: {
    top: 4378,
  },
  often: {
    top: 4421,
  },
  sometimes: {
    top: 4464,
  },
  rarely: {
    top: 4507,
  },
  never: {
    top: 4550,
  },
  howOftenDo1: {
    top: 4296,
    left: 30,
  },
  pexelsBenanSude156926722274: {
    top: 4737,
  },
  notImportant: {
    top: 4683,
  },
  text88: {
    top: 4726,
  },
  text89: {
    top: 4769,
  },
  text90: {
    top: 4812,
  },
  veryImportant: {
    top: 4855,
  },
  onAScale: {
    top: 4600,
    left: 35,
    width: 363,
  },
  doYouHave: {
    top: 4929,
    left: 33,
  },
  survey: {
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    borderColor: "#2c8eb5",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 5200,
    overflow: "hidden",
  },
});

export default Survey;
