import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Color, FontFamily } from 'GlobalStyles';
import { getProductOverview } from 'services/companyApi';

const ProductOverview = ({ companyId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductOverview(companyId);
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
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.info}>Industry: {data.industry}</Text>
      <Text style={styles.info}>Location: {data.location}</Text>
      <Text style={styles.info}>Employees: {data.employees}</Text>
      <Text style={styles.info}>Align Score: {data.alignScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Color.background,
  },
  title: {
    fontSize: 24,
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

export default ProductOverview;