import { Outlet } from 'react-router-dom';
import { Header } from './app/components/header/header';

export function App() {
  return (
    <div className='container'>
      <Header/>
      <div className='content'>
        <Outlet/>
      </div>
    </div>
  )
}
