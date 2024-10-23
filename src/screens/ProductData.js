import React from "react";
import { ImageBackground, Image, StyleSheet, View, Text, ScrollView } from "react-native";
import Cards from "components/Cards"; // Corrected path
import { Color, Border, FontFamily, FontSize } from "GlobalStyles"; // Corrected path
import SwipeableScreenWrapper from 'components/SwipeableScreenWrapper'; // Corrected path

const ProductData = ({ navigation }) => {
  const renderContent = () => {
    try {
      return (
        <View style={styles.productData}>
          <Image
            style={styles.f0fe04b8f4f921c91044b894ac66Icon}
            resizeMode="cover"
            source={require("assets/6977f0fe04b8f4f921c91044b894ac66-1-4.png")}  // Corrected path
          />
          <Image
            style={styles.generalRectangleIcon}
            resizeMode="cover"
            source={require("assets/general-rectangle.png")}  // Corrected path
          />
          <View style={[styles.productDataChild, styles.productChildLayout1]} />
          <Image
            style={[styles.generalRectangleIcon1, styles.rectangleIconLayout]}
            resizeMode="cover"
            source={require("assets/general-rectangle1.png")}  // Corrected path
          />
          <Image
            style={[styles.productDataItem, styles.productPosition]}
            resizeMode="cover"
            source={require("assets/rectangle-4288.png")}  // Corrected path
          />
          <Image
            style={[styles.productDataInner, styles.rectangleIconLayout]}
            resizeMode="cover"
            source={require("assets/rectangle-4275.png")}  // Corrected path
          />
          <View style={[styles.executiveTitle, styles.titleLayout]} />
          <Text style={[styles.text, styles.textLayout]}>70%</Text>
          <Text style={[styles.text1, styles.textLayout]}>78%</Text>
          <Text style={[styles.userRating, styles.userRatingTypo]}>User Rating</Text>
          <Text style={styles.industry}>Industry:</Text>
          <Text style={[styles.location, styles.locationTypo]}>Location:</Text>
          <Text style={[styles.numberOfEmployees, styles.locationTypo]}>Number of employees:</Text>
          <Text style={styles.executivesName}>Executive(s) name:</Text>
          <Text style={[styles.executiveCompensationDistrib, styles.supplyTypo]}>
            Executive Compensation Distribution:
          </Text>
          <Text style={[styles.workerToCeo, styles.supplyTypo]}>Worker to CEO Pay Ratio:</Text>
          <Text style={[styles.emissionsData, styles.supplyTypo]}>Emissions Data</Text>
          <Text style={[styles.supplyChainMaterials, styles.supplyTypo]}>Supply Chain Materials:</Text>
          <Text style={[styles.supplyChainMap, styles.supplyTypo]}>Supply Chain Map:</Text>
          <Text style={[styles.alignScore, styles.userRatingTypo]}>Align SCORE</Text>
          <Text style={styles.regionalSourcingMap}>Regional Sourcing Map:</Text>
          <Text style={[styles.executive, styles.generalTypo]}>Executive</Text>
          <View style={[styles.generalTitle, styles.titleLayout]} />
          <Text style={[styles.general, styles.generalTypo]}>General</Text>
          <View style={styles.rectangleView} />
          <Text style={styles.climate}>Climate</Text>
          <Image
            style={[styles.rectangleIcon, styles.rectangleIconPosition]}
            resizeMode="cover"
            source={require("assets/rectangle-42881.png")}  // Corrected path
          />
          <View style={[styles.diTitle, styles.productChildLayout1]} />
          <Text style={[styles.diversityAndInclusion, styles.rectangleIconPosition]}>
            Diversity and Inclusion
          </Text>
        </View>
      );
    } catch (error) {
      console.error('Render error:', error);
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>An error occurred while rendering the content.</Text>
        </View>
      );
    }
  };

  return (
    <SwipeableScreenWrapper
      onSwipeLeft={() => navigation.navigate('Profile')}
      onSwipeRight={() => navigation.navigate('Survey')}
    >
      <ImageBackground
        source={require("assets/productdatabackdrop.jpg")}  // Corrected path
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {renderContent()}
        </ScrollView>
      </ImageBackground>
    </SwipeableScreenWrapper>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent overlay if needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  productChildLayout1: {
    height: 32,
    backgroundColor: Color.white,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  rectangleIconLayout: {
    width: 412,
    borderRadius: Border.br_sm,
  },
  productPosition: {
    left: 14,
    width: 412,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  titleLayout: {
    height: 27,
    backgroundColor: Color.white,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  textLayout: {
    height: 37,
    width: 84,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.nATS,
    lineHeight: 35,
    fontSize: FontSize.size_31xl,
    left: 320,
    position: "absolute",
  },
  userRatingTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 34,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    width: 115,
    textAlign: "left",
    color: Color.white,
    lineHeight: 35,
    position: "absolute",
  },
  locationTypo: {
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  supplyTypo: {
    width: 336,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    height: 27,
    position: "absolute",
  },
  generalTypo: {
    height: 26,
    textAlign: "center",
    color: Color.colorDarkslateblue,
    lineHeight: 20,
    letterSpacing: 1.2,
    fontFamily: FontFamily.sonder,
    fontSize: FontSize.size_xl,
  },
  rectangleIconPosition: {
    top: 4336,
    position: "absolute",
  },
  subsidiariesLayout: {
    height: 211,
    width: 365,
  },
  productChildBg: {
    backgroundColor: Color.white,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  mediaTypo: {
    width: 128,
    left: 156,
    textAlign: "center",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.sonder,
    lineHeight: 20,
    letterSpacing: 1.2,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  mediaCoverageTypo: {
    height: 284,
    width: 320,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  reputationScoresLayout: {
    height: 326,
    width: 305,
  },
  mediaPosition: {
    top: 8288,
    left: 30,
  },
  reputationTypo: {
    top: 8514,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
 
  productChildLayout: {
    left: 141,
    height: 32,
    width: 155,
    backgroundColor: Color.white,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  ownershipLayout: {
    left: 155,
    width: 128,
    height: 26,
    textAlign: "center",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.sonder,
    lineHeight: 20,
    letterSpacing: 1.2,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  humanRightsRecordTypo: {
    width: 371,
    left: 29,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  workerRightsTypo: {
    height: 210,
    width: 320,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  unionizationHistoryTypo: {
    width: 381,
    height: 121,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  companyTypo: {
    height: 20,
    width: 381,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  lobbyingEffortsTypo: {
    width: 298,
    left: 33,
    fontSize: FontSize.size_xl,
    height: 60,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  subsidiariesTypo: {
    left: 35,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  f0fe04b8f4f921c91044b894ac66Icon: {
    top: 2071,
    left: 528,
    width: 232,
    height: 273,
    position: "absolute",
  },
  generalRectangleIcon: {
    top: 345,
    width: 408,
    height: 331,
    borderRadius: Border.br_sm,
    left: 13,
    position: "absolute",
  },
  productDataChild: {
    width: 155,
    left: 142,
    top: 1700,
  },
  generalRectangleIcon1: {
    top: 733,
    height: 930,
    left: 13,
    width: 412,
    position: "absolute",
  },
  productDataItem: {
    top: 3221,
    height: 1062,
  },
  productDataInner: {
    left: 15,
    height: 1469,
    top: 1700,
    position: "absolute",
  },
  executiveTitle: {
    top: 719,
    left: 161,
    width: 118,
  },
  text: {
    top: 105,
  },
  text1: {
    top: 207,
  },
  userRating: {
    top: 244,
    left: 311,
  },
  industry: {
    top: 406,
    width: 297,
    height: 51,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: 40,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  location: {
    top: 505,
    width: 300,
    height: 46,
    fontSize: FontSize.size_lg,
    left: 40,
    fontWeight: "700",
  },
  numberOfEmployees: {
    top: 593,
    left: 41,
    width: 302,
    height: 45,
    fontSize: FontSize.size_lg,
  },
  executivesName: {
    top: 784,
    left: 27,
    width: 378,
    height: 60,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  executiveCompensationDistrib: {
    top: 952,
    left: 24,
  },
  workerToCeo: {
    top: 1293,
    left: 25,
  },
  emissionsData: {
    top: 1769,
    left: 25,
  },
  supplyChainMaterials: {
    top: 2029,
    left: 25,
  },
  supplyChainMap: {
    top: 2463,
    left: 25,
  },
  alignScore: {
    top: 146,
    left: 306,
  },
  regionalSourcingMap: {
    top: 5159,
    height: 40,
    width: 320,
    left: 36,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  executive: {
    top: 721,
    left: 172,
    width: 99,
    transform: [
      {
        rotate: "-0.2deg",
      },
    ],
    position: "absolute",
  },
  generalTitle: {
    top: 330,
    left: 165,
    width: 110,
  },
  general: {
    top: 333,
    left: 179,
    width: 83,
    transform: [
      {
        rotate: "-0.2deg",
      },
    ],
    position: "absolute",
  },
  rectangleView: {
    top: 1688,
    left: 163,
    width: 115,
    height: 32,
    backgroundColor: Color.white,
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  climate: {
    top: 1694,
    left: 175,
    width: 88,
    height: 26,
    textAlign: "center",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.sonder,
    lineHeight: 20,
    letterSpacing: 1.2,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rectangleIcon: {
    left: 11,
    height: 1976,
    width: 412,
    borderRadius: Border.br_sm,
  },
  diTitle: {
    top: 4328,
    left: 101,
    width: 240,
  },
  diversityAndInclusion: {
    left: 47,
    width: 356,
    height: 26,
    textAlign: "center",
    color: Color.colorDarkslateblue,
    lineHeight: 20,
    letterSpacing: 1.2,
    fontFamily: FontFamily.sonder,
    fontSize: FontSize.size_xl,
  },
  communityEngagement: {
    top: 5887,
    width: 384,
    height: 188,
    left: 30,
    fontSize: FontSize.size_xl,
  },
  sustainabilityInitiatives: {
    top: 6118,
    left: 33,
    width: 365,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  productDataChild1: {
    top: 77,
    left: 21,
    width: 157,
    height: 201,
  },
  logo: {
    fontSize: FontSize.size_21xl, // Keep the large font size for visibility
    lineHeight: FontSize.size_21xl + 10, // Increase line height to avoid clipping
    color: "#0f5a87", // Ensure the color is contrasting
    fontFamily: FontFamily.sonder,
    width: 126,
    height: 51,
    textAlign: "left",
    position: "absolute",
    top: 150, // Adjust the top position so it doesn't overlap with the box
    left: 44, // Position it correctly on the screen
  },
  productDataChild2: {
    top: 8222,
    height: 486,
  },
  productDataChild3: {
    top: 8206,
    width: 155,
    left: 142,
  },
  media: {
    top: 8213,
    left: 156,
    height: 26,
  },
  mediaCoverage: {
    top: 8288,
    left: 30,
    fontSize: FontSize.size_lg,
  },
  reputationScores: {
    top: 8514,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.white,
    position: "absolute",
    left: 36,
    width: 305,
    fontSize: FontSize.size_lg,
  },
  media1: {
    top: 8213,
    left: 156,
    height: 26,
  },
  mediaCoverage1: {
    width: 370,
    height: 207,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  reputationScores1: {
    width: 354,
    height: 163,
    left: 30,
    fontSize: FontSize.size_xl,
  },
  productDataChild8: {
    top: 8773,
    height: 756,
    left: 13,
    width: 412,
    position: "absolute",
  },
  productDataChild9: {
    top: 8757,
  },
  humanRights: {
    top: 8764,
  },
  humanRightsRecord: {
    top: 8839,
    height: 347,
  },
  reputationScores2: {
    top: 9206,
    height: 274,
  },
  productDataChild11: {
    top: 9573,
    height: 773,
    left: 13,
    width: 412,
    position: "absolute",
  },
  productDataChild12: {
    top: 9557,
  },
  legalPosition: {
    top: 9564,
    left: 155,
    width: 128,
    height: 26,
    textAlign: "center",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.sonder,
    lineHeight: 20,
    letterSpacing: 1.2,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  legalProceedings: {
    top: 9639,
    left: 29,
    fontSize: FontSize.size_xl,
  },
  complianceWithRegulations: {
    top: 10006,
    left: 29,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  productDataChild16: {
    top: 3209,
    height: 24,
    width: 155,
    left: 142,
  },
  labor: {
    top: 3214,
    height: 19,
    transform: [
      {
        rotate: "-0.2deg",
      },
    ],
  },
  workerRights: {
    top: 3270,
    left: 30,
  },
  sustainabilityInitiatives1: {
    top: 2860,
    left: 25,
  },
  wages: {
    top: 3548,
    height: 121,
    width: 305,
    left: 30,
    fontFamily: FontFamily.ralewayBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  employeeReviewsRatings: {
    top: 3799,
    left: 31,
  },
  unionizationHistory: {
    top: 4078,
    left: 29,
  },
  companyRacialDiversity: {
    top: 4407,
    left: 25,
  },
  companyGenderDiversity: {
    top: 4940,
    left: 25,
  },
  companyEthnicDiversity: {
    top: 5472,
    left: 26,
  },
  productDataChild17: {
    top: 6348,
    height: 991,
    left: 13,
    width: 412,
    position: "absolute",
  },
  productDataChild18: {
    top: 6329,
    left: 135,
    width: 155,
  },
  climate1Position: {
    left: 170,
    top: 6335,
    width: 88,
    height: 26,
    textAlign: "center",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.sonder,
    lineHeight: 20,
    letterSpacing: 1.2,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  lobbyingEfforts: {
    top: 6880,
  },
  involvementInInternational: {
    top: 7086,
  },
  campaignFinancing: {
    top: 6613,
  },
  politicalDonations: {
    top: 6417,
  },
  productDataChild20: {
    top: 7388,
    height: 786,
    left: 13,
    width: 412,
    position: "absolute",
  },
  productDataChild21: {
    top: 7372,
  },
  ownership: {
    top: 7379,
  },
  ofVotingStock: {
    top: 7454,
    left: 29,
    fontSize: FontSize.size_xl,
  },
  ownershipStructure: {
    top: 7680,
    height: 326,
    width: 305,
  },
  subsidiaries: {
    top: 7917,
    height: 211,
    width: 365,
  },
  productData: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 50,
    elevation: 50,
    shadowOpacity: 1,
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 10766,
  },
});

export default ProductData;