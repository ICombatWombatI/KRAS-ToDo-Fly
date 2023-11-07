import { Todo } from '../../../models/todo.model';

export function TodoCard({ todo } : {todo: Todo} ) {

  console.log(todo)

  return (
  <div className='card'>
    {todo.title}
  </div>
  )
}
