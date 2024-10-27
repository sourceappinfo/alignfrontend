import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { getEnvironmentalImpactData } from 'services/companyApi';
import { Color, FontFamily } from 'GlobalStyles';

const EnvironmentalImpactSection = ({ companyId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEnvironmentalImpactData(companyId);
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
      <Text style={styles.header}>Environmental Impact</Text>
      <Text style={styles.info}>Emissions: {data.emissions}</Text>
      <Text style={styles.info}>Sustainability Initiatives: {data.sustainabilityInitiatives}</Text>
      <Text style={styles.info}>Supply Chain: {data.supplyChain}</Text>
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

export default EnvironmentalImpactSection;
