import { Filter, Todo } from '../types';

export const getFilteredTodos = (list: Todo[], filter: Filter): Todo[] => {
  switch (filter) {
    case 'active':
      return list.filter((todo) => !todo.done);
    case 'done':
      return list.filter((todo) => todo.done);
    case 'all':
      return list;
  }
};
