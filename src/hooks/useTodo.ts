import { useState } from 'react';
import { Todo } from '../types';

export const useTodo = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: Date.now().toString(),
      title: text.trim(),
      done: false
    };

    setTodos((prevState) => [newTodo, ...prevState]);
    setText('');
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) => {
      return prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo));
    });
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return {
    text,
    setText,
    todos,
    removeTodo,
    addTodo,
    toggleTodo,
    countTasks: todos.length
  };
};
