import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from 'GlobalStyles'; // No 'src/' because of the alias setup

const CorporateGovernance = () => {
  return (
    <View style={styles.corporateGovernance}>
      <Text style={[styles.thisLooksAt, styles.csrTransform]}>{`
This looks at a company's corporate social responsibility (CSR), transparency, accountability, and leadership practices. We examine political lobbying activities, shareholder values, and commitment to corporate social responsibility.


`}</Text>
      <View style={[styles.pexelsEsrageziyor4576022011, styles.csrTransform]} />
      <Text style={[styles.csr, styles.csrTransform]}>CSR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  csrTransform: {
    transform: [
      {
        rotate: "-0.1deg",
      },
    ],
    position: "absolute",
  },
  thisLooksAt: {
    top: 147,
    left: 16,
    fontSize: FontSize.size_16xl,
    lineHeight: 46,
    fontWeight: "500",
    fontFamily: FontFamily.maliMedium,
    width: 339,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "left",
    color: Color.white,
    transform: [
      {
        rotate: "-0.1deg",
      },
    ],
    position: "absolute",
  },
  pexelsEsrageziyor4576022011: {
    top: 467,
    left: -1429,
    width: 525,
    height: 59,
    transform: [
      {
        rotate: "-0.1deg",
      },
    ],
    position: "absolute",
  },
  csr: {
    top: 65,
    left: 18,
    fontSize: FontSize.size_77xl,
    lineHeight: 93,
    fontFamily: FontFamily.sonder,
    width: 380,
    textAlign: "left",
    color: Color.white,
    transform: [
      {
        rotate: "-0.1deg",
      },
    ],
    position: "absolute",
  },
  corporateGovernance: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorBlack,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 956,
    overflow: "hidden",
    transform: [
      {
        rotate: "0.1deg",
      },
    ],
  },
});

export default CorporateGovernance;
