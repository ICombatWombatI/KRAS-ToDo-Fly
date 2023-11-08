import { Todo } from '../../../models/todo.model';

export function TodoCard({ todo } : {todo: Todo} ) {

  console.log(todo)

  return (
  <div className='card'>
    <span className='body_1 medium-white'> 
      {todo.title}
    </span>
  </div>
  )
}
