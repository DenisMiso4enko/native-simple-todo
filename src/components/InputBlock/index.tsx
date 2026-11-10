import React from 'react';
import { Animated, Pressable, StyleSheet, Text, TextInput } from 'react-native';
import View = Animated.View;

export interface InputBlockProps {
  text: string;
  setText: (text: string) => void;
  addTodo: () => void;
}

export const InputBlock = ({ addTodo, setText, text }: InputBlockProps) => {
  return (
    <View style={styles.inputRow}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter todo name..."
        onSubmitEditing={addTodo}
      />

      <Pressable
        onPress={addTodo}
        style={({ pressed }) => [styles.addButton, pressed && styles.addButtonPressed]}
      >
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  input: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16
  },
  addButton: {
    marginLeft: 10,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 8,
    elevation: 4
  },
  addButtonPressed: {
    backgroundColor: '#0063D1',
    transform: [{ scale: 0.96 }],
    shadowOpacity: 0.18
  },
  addButtonText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 32,
    marginTop: -1
  }
});
