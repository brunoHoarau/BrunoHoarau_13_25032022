import { Routes, Route, Redirect, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home'
import SignIn from '../pages/SignIn/SignIn';
import Profile from '../pages/Profile/Profile'
import { useSelector } from 'react-redux'




 const Router = () => {
   const isAuth = useSelector(state => state.isAuth)
  
   console.log(isAuth)
  return(
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/profile" element={ isAuth ? <Profile /> : <Navigate replace to="/sign-in" /> } />
          {/* // { isAuth ? <Route path='/profile' element={<Profile />} /> : <Route path="/sign-in" element={<SignIn />}/> } */}
        <Route path='*' />
      </Routes>
    )
}

export default Router;

