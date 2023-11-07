import { Board } from '../../models/boards.model';
import { useState } from 'react';

export function NavLeft({ boards, onNavigate}: { boards: Board[], onNavigate(boardId: string): void }) {
  const [ expanded, setExpanded ] = useState(true);

  return ( <div className={`nav-left ${expanded ? 'expanded' : ''}`}>
      <div className='nav-control'>
        <div className='control-desc'>
          <span className='body_1 text-white'> Control </span>
        </div>
        <div className='control-action'>
          <button onClick={() => setExpanded(!expanded)}> ! </button>
        </div>
      </div>
      <div className='board-links'>
        {
          boards.map(board => {
            return <div className='board-link' key={board.id} onClick={() => onNavigate(board.id)}> 
              <span className='body_1 text-white'> {board.title}</span>
            </div> 
          })
        }
      </div>
    </div>
  )
}
