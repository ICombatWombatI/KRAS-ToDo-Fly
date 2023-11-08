import { Board } from '../../../models/boards.model';
import { useState } from 'react';
import KrButton, { KrButtonType } from '../../general/krButton/krButton';

export function KrSidebar({ boards, onNavigate}: { boards: Board[], onNavigate(boardId: string): void }) {
  const [ expanded, setExpanded ] = useState(true);

  return ( <div className={`kr-sidebar ${expanded ? 'expanded' : ''}`}>
      <div className='nav-control'>
        <div className='control-desc'>
          <span className='body_1 medium-white'> Boards </span>
        </div>
        <div className='control-action'>
          <KrButton 
            onToggle={() => setExpanded(!expanded)} 
            type={KrButtonType.ACTION}
            iconConfig={{
              name: 'arrow_forward'
            }}
          />
        </div>
      </div>
      <div className='board-links'>
        {
          boards.map(board => {
            return <div className='board-link' key={board.id} onClick={() => onNavigate(board.id)}> 
              <span className='body_1 medium-white'> {board.title}</span>
            </div> 
          })
        }
      </div>
    </div>
  )
}
