import logo from '../../../assets/logo.png';
import './header.scss';

export function Header() {
  return (<div className='header'>
    <div className='logo'>
      <img src={logo} />
      <h1 className='medium-white'> ToDo </h1>
    </div>
  </div>
  )
}
