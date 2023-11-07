import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import { Board } from '../../models/boards.model';
import { NavLeft } from '../../components/nav-left/nav-left';

export function Boards() {
  const navigate = useNavigate();
  const { boards } = useLoaderData() as { boards: Board[] };

  const toggleNavigate = (boardId: string) => {
    navigate(`/todos/${boardId}`);
  };

  return (
  <div className='container-page'>
    <NavLeft boards={boards} onNavigate={toggleNavigate}/>
    <div className='content'>
      <Outlet/>
    </div>
  </div>
  )
}
