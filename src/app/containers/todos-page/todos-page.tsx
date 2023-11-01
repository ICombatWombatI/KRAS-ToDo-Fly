import { useLoaderData } from 'react-router-dom';
import { Todo } from '../../models/todo.model';

export function TodosPage() {
  const { todos } = useLoaderData() as { todos: Todo[] };

  console.log(todos)

  return (
  <div>
    todos
  </div>
  )
}
