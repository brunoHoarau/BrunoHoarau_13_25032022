
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Auth_Logout } from '../../actions/actions'
import Logo from "../../asset/argentBankLogo.png"
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {

  const isAuth = useSelector( state => state.isAuth )
  const firstName = useSelector( state => state.firstname)
  const dispatch = useDispatch()

  const handleClickLogout = () => {
    dispatch( Auth_Logout())
  }

  return (
    <nav className="main-nav">
      <Link to='/' className="main-nav-logo"> 
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      { isAuth ?
       <div>
         <div className="main-nav-item">
          <Link to='/profile' >
            <FontAwesomeIcon icon={faUserCircle} />
            <p>{firstName}</p>
          </Link>
          </div>
          <Link to='/' className="main-nav-item" onClick={ () => { handleClickLogout()}}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            logout
          </Link>
        </div> 
        : <div>
            <Link to='/sign-in' className="main-nav-item">
            <FontAwesomeIcon icon={faUserCircle} />
              Sign In
            </Link>
          </div>
      }
    </nav>
  )
}

export default Header;