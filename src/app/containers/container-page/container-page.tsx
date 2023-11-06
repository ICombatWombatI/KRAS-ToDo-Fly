import { Link, useLoaderData } from 'react-router-dom';
import { Board } from '../../models/boards.model';

export function ContainerPage() {
  const { boards } = useLoaderData() as { boards: Board[] };

  console.log(boards)

  return (
  <div>
    {boards.map(board => {
      return <Link key={board.id} to={`/todos/${board.id}`}> {board.title}</Link>
    })}
  </div>
  )
}
