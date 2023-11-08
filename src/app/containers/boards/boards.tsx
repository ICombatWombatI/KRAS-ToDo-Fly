import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import { Board } from '../../models/boards.model';
import { KrSidebar } from '../../components/general/krSidebar/krSidebar';
 
export function Boards() {
  const navigate = useNavigate();
  const { boards } = useLoaderData() as { boards: Board[] };

  const toggleNavigate = (boardId: string) => {
    navigate(`/todos/${boardId}`);
  };

  return (
  <div className='container row'>
    <KrSidebar boards={boards} onNavigate={toggleNavigate}/>
    <div className='content todos'>
      <Outlet/>
    </div>
  </div>
  )
}
