import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { getFinancialResponsibilityData } from 'services/companyApi';
import { Color, FontFamily } from 'GlobalStyles';

const FinancialResponsibilitySection = ({ companyId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFinancialResponsibilityData(companyId);
        setData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [companyId]);

  if (loading) return <ActivityIndicator size="large" color={Color.primary} />;
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Financial Responsibility</Text>
      <Text style={styles.info}>Ownership: {data.ownership}</Text>
      <Text style={styles.info}>Legal Proceedings: {data.legalProceedings}</Text>
      <Text style={styles.info}>Compliance: {data.compliance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Color.background,
  },
  header: {
    fontSize: 22,
    fontFamily: FontFamily.bold,
    color: Color.primary,
  },
  info: {
    fontSize: 16,
    fontFamily: FontFamily.regular,
    color: Color.text,
    marginVertical: 4,
  },
});

export default FinancialResponsibilitySection;
