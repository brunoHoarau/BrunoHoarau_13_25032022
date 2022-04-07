import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from "../../asset/argentBankLogo.png"
import './Header.css'
import { useSelector } from 'react-redux';

const Header = () => {

  const isAuth = useSelector( state => state.isAuth )
    return (
      <nav className="main-nav">
        <Link to='/' className="main-nav-logo"> <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          { isAuth ? <Link to='/logout' className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            logout
          </Link> : <Link to='/sign-in' className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
          }
        </div>
      </nav>
      )
  
}

export default Header;