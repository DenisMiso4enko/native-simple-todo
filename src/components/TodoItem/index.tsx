import { Animated, Pressable, Text, StyleSheet } from 'react-native';
import View = Animated.View;
import { Todo } from '../../types';

export interface TodoItemProps {
  item: Todo;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

export const TodoItem = ({ removeTodo, item, toggleTodo }: TodoItemProps) => {
  return (
    <View style={styles.todoRow}>
      <Pressable style={styles.todoTextWrap} onPress={() => toggleTodo(item.id)}>
        <Text style={[styles.todoText, item.done && styles.todoDone]}>{item.title}</Text>
      </Pressable>

      <Pressable onPress={() => removeTodo(item.id)}>
        <Text style={styles.remove}>✕</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  todoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  todoTextWrap: {
    flex: 1
  },
  todoText: {
    fontSize: 18
  },
  todoDone: {
    textDecorationLine: 'line-through',
    color: '#999'
  },
  remove: {
    fontSize: 20,
    color: '#e11d48',
    paddingHorizontal: 8
  }
});
