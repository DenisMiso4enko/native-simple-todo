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

      <Pressable style={styles.addButton} onPress={addTodo}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    marginBottom: 20
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16
  },
  addButton: {
    marginLeft: 10,
    width: 48,
    backgroundColor: '#4f46e5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  }
});
