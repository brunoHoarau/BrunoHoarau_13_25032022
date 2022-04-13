import FetchData from "../../service/FetchData";
import "./SignInForm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth_Login } from "../../actions/actions";

const SignInConnect = () => {

  const [errMessage, setErrorMessage] = useState(false)
  const isAuth = useSelector(state => state.isAuth)
  const dispatch = useDispatch()
  const history = useNavigate()
  const messError = `Please enter a valid email and/or password`

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payloadConnexion = {email: e.target.username.value,
    password: e.target.password.value};
    try{
      const data = await new FetchData().getUserLogin(payloadConnexion);
      const getDataUser = await new FetchData().getUserProfil(data)
      dispatch( Auth_Login(data, getDataUser))
      history("/profile")
    }catch (err) { console.log("Erreur :" + err); 
      setErrorMessage(true)
   }
  }

  return(
	  <section className="sign-in-content">
      <FontAwesomeIcon icon={faUserCircle} />
      <h1>Sign In</h1>
      <form onSubmit={ (e) => { handleSubmit(e)}} >
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="email" id="username" name="username" required/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" autoComplete="on" required />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
            >Remember me</label>
        </div>
        <button className="sign-in-button" >Sign In</button> 
        { errMessage ? <p className="error-msg-singIn">{messError}</p>: ''}
      </form>
    </section>
	)
	
}

export default SignInConnect