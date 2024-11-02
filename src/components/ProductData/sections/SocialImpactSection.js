import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { getSocialImpactData } from 'services/companyApi';
import { Color, FontFamily } from 'GlobalStyles';

const SocialImpactSection = ({ companyId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSocialImpactData(companyId);
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
      <Text style={styles.header}>Social Impact</Text>
      <Text style={styles.info}>Diversity: {data.diversity}</Text>
      <Text style={styles.info}>Community Engagement: {data.communityEngagement}</Text>
      <Text style={styles.info}>Worker Rights: {data.workerRights}</Text>
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

export default SocialImpactSection;
