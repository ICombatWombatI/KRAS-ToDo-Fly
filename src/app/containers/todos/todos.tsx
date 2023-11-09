import { useLoaderData } from 'react-router-dom';
import { Todo } from '../../models/todo.model';
import { TodoCard } from './todo-card/todo-card';
import { TodoControl } from './todo-control/todo-control';
 import './todos.scss';

export function Todos() {
  const { todos } = useLoaderData() as { todos: Todo[] };

  return (
  <div className='todos'>
    <TodoControl/>

    <div className='list'>
      { todos.map(todo => <TodoCard key={todo.id} todo={todo}/>) }
    </div>
  </div>
  )
}
