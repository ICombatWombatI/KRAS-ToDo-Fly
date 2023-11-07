import { useLoaderData } from 'react-router-dom';
import { Todo } from '../../../models/todo.model';
import { TodoCard } from '../todo-card/todo-card';

export function Todos() {
  const { todos } = useLoaderData() as { todos: Todo[] };

  console.log(todos)

  return (
  <div>
    { todos.map(todo => <TodoCard key={todo.id} todo={todo}/>) }
  </div>
  )
}
