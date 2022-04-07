import FetchData from "../../service/FetchData";
import "./SignInConnect.css";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const SignInConnect = () => {
 
  const isAuth = useSelector(state => state.isAuth)
  // console.log(isAuth)
  const dispatch = useDispatch()
  const AuthAction = (payload, dataUser) => ({ type: "AuthSuccess", payload: payload, dataUser: dataUser})

  const history = useNavigate()

  useEffect( () => { 
    if(isAuth){history('/profile')}
  })
  

  const handleSubmit =  async (e) => {
    try{ 
      const data = await new FetchData().getUserLogin({"email": "steve@rogers.com","password": "password456"});
      const getDataUser = await new FetchData().getUserProfil(data)
      console.log(getDataUser.firstName)
      dispatch( AuthAction(data, getDataUser))

      history("/profile")
    }
    catch (err) { console.log(err)}
  }
  
  
  		return(
			<section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form 
          onSubmit={ (e) => { }}
          >
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete="on" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label >
          </div>
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
          {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
          <button className="sign-in-button" >Sign In</button> 
          {/* <!--  --> */}
        </form>
        <p onClick={ (e) => { handleSubmit(e)}}> CLick ptite pute </p>
      </section>

      
		)
	
}

export default SignInConnect