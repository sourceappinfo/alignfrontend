import * as React from 'react';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

const Icon1 = ({ icon }) => {
  return <Image style={styles.icon} contentFit="cover" source={icon} />;
};

const styles = StyleSheet.create({
  icon: {
    height: 16,
    overflow: 'hidden',
    width: 16,
  },
});

export default Icon1;
