import { useLoaderData } from 'react-router-dom';
import { Todo } from '../../models/todo.model';
import { TodoCard } from './todo-card/todo-card';
import { TodoControl } from './todo-control/todo-control';
import TaskDetailsDialog, { TaskDetailsDialogRef } from './task-details-dialog/task-details-dialog';
import { createRef } from 'react';
 import './todos.scss';

export function Todos() {
  const { todos } = useLoaderData() as { todos: Todo[] };
  const dialogRef = createRef<TaskDetailsDialogRef>();

  const handleSearch = (text: string | null) => {
    console.log(text);
  };

  const handleTaskDone = () => {
  dialogRef.current?.openDialog(null);
  };

  const handleAddTask = () => {

  };

  const handleTaskEdit = (todo: Todo) => {
    dialogRef.current?.openDialog(todo);
  };

  return (<>
  <div className='todos'>
    <TodoControl onSearch={handleSearch} onTaskDone={handleTaskDone} onAddTask={handleAddTask}/>
    <TaskDetailsDialog ref={dialogRef}/>

    <div className='list'>
      { todos.map(todo => <TodoCard key={todo.id} todo={todo} onEdit={() => handleTaskEdit(todo)}/>) }
    </div>
  </div>
  </>
  )
}
