import { useLoaderData } from 'react-router-dom';
import { Todo } from '../../models/todo.model';
import { TodoCard } from './todo-card/todo-card';
import { TodoControl } from './todo-control/todo-control';
 import './todos.scss';

export function Todos() {
  const { todos } = useLoaderData() as { todos: Todo[] };

  const handleSearch = (text: string | null) => {
    console.log(text);
  };

  const handleTaskDone = () => {

  };

  const handleAddTask = () => {

  };

  return (
  <div className='todos'>
    <TodoControl onSearch={handleSearch} onTaskDone={handleTaskDone} onAddTask={handleAddTask}/>

    <div className='list'>
      { todos.map(todo => <TodoCard key={todo.id} todo={todo}/>) }
    </div>
  </div>
  )
}
