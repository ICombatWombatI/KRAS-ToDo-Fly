import { Outlet } from 'react-router-dom';

export function App() {
  return (
    <div className='container'>
      <div className='header'> </div>
      <div className='content'>
        <Outlet/>
      </div>
    </div>
  )
}
