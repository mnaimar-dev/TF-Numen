import { NavLink } from 'react-router-dom';
import Toogler from '../hamburguerToogler/Toogler';
import './Header.css'

function Header({ contador }) {
  return (
    <div className='header'>
      <NavLink className="nav_link main_links text-decoration-none mt-2" to="/">
        <img className='header_logo' src="http://images.squarespace-cdn.com/content/v1/56f1b69f27d4bda6c8f2555a/1459451039911-CXR2FVEC3ZSZVLNHQFKV/DH_HORSE_ISO.png" alt="Main Logo" />
      </NavLink>
      <Toogler
        contador = { contador }
      />
    </div>
  )
}

export default Header;