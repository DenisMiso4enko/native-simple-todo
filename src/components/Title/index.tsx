import React from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import View = Animated.View;

interface TitleProps {
  countTasks: number;
}

export const Title = ({ countTasks }: TitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Мои задачи</Text>
      <Text>{countTasks}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    display: 'flex',
    gap: '8'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold'
  }
});
