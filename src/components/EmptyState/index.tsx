import React from 'react';
import {StyleSheet, Text} from "react-native";

export const EmptyState = () => {
  return (
    <Text style={styles.empty}>Задач пока нет</Text>
  );
};


const styles = StyleSheet.create({
  empty: {
    textAlign: 'center',
    color: '#999',
    marginTop: 40,
  },
})