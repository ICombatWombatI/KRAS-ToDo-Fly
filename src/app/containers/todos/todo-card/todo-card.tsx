import KrButton, { KrButtonType } from '../../../components/general/krButton/krButton';
import { Todo } from '../../../models/todo.model';

export function TodoCard({ todo, onEdit } : {todo: Todo, onEdit: any} ) {

  console.log(todo)

  return (
  <div className='card'>
    <KrButton type={KrButtonType.ACTION} iconConfig={{ name: 'done' }}/>
    <div className='card-title'>
      <span className='body_1 medium-white'> 
        {todo.title}
      </span>
    </div>
    <KrButton onToggle={onEdit} type={KrButtonType.ACTION} iconConfig={{ name: 'edit' }}/>
  </div>
  )
}
