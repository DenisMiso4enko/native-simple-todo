import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { TodoItem } from './src/components/TodoItem';
import { EmptyState } from './src/components/EmptyState';
import { useTodo } from './src/hooks/useTodo';
import { InputBlock } from './src/components/InputBlock';
import { Title } from './src/components/Title';
import { Filters } from './src/components/Filters';

export default function App() {
  const {
    addTodo,
    removeTodo,
    todos,
    setText,
    text,
    toggleTodo,
    countTasks,
    setActiveFilter,
    activeFilter
  } = useTodo();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Title countTasks={countTasks} />
        <InputBlock text={text} setText={setText} addTodo={addTodo} />
        <Filters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id} // вместо key={}
          ListEmptyComponent={<EmptyState />}
          renderItem={({ item }) => (
            <TodoItem item={item} removeTodo={removeTodo} toggleTodo={toggleTodo} key={item.id} />
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  }
});
