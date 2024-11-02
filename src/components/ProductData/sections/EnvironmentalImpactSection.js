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
    backgroundColor: Color.background,
    padding: 20,
  },
  header: {
    color: Color.primary,
    fontFamily: FontFamily.bold,
    fontSize: 22,
  },
  info: {
    color: Color.text,
    fontFamily: FontFamily.regular,
    fontSize: 16,
    marginVertical: 4,
  },
});

export default EnvironmentalImpactSection;
