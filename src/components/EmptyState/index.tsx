import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const EmptyState = () => {
  return <Text style={styles.empty}>There is no tasks</Text>;
};

const styles = StyleSheet.create({
  empty: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20
  }
});
