import { useDispatch, useSelector, useStore } from "react-redux";
import './UserAccount.css'
import { useEffect, useState } from "react";
import AccountsCard from '../AccountCard/AccontCard'



const UserAccount = () => {
	const [firstNameValue, setFirstNameValue ] = useState('');
	const [lastNameValue, setLastNameValue ] = useState('');

	const firstname = useSelector( state => state.firstname )
	const lastname = useSelector( state => state.lastname )
	const editUserState = useSelector( state => state.editUser)

	const editAction = () => ({type: "EditActivate"})
	const saveEditAction = (payload) => ({type: "SaveEdit", payload: payload})
	const dispatch = useDispatch()	
	const fullName =  firstname +" "+ lastname 
								
	const handleClickEdit = () => {
		dispatch( editAction())
		}

	const handleClickSaveEdit = () => {
		dispatch( saveEditAction({firstNameValue, lastNameValue}))
	}
	
		return(
			<>
			{ 
				!editUserState ? 
				<div className="header">
      	  <h1>Welcome back<br />{fullName}</h1>
      	  <button className="edit-button" onClick={ ()=>{ handleClickEdit()} }>Edit Name</button>
      	</div>
				 : 
				<div className="header">
				 	<h1>Welcome back<br />
				 		<form id="myform" onSubmit={ (e)=>{ console.log(e.target)}}>
						 	<input id="firstName"  placeholder={firstname} onChange= { e => setFirstNameValue(e.target.value) } /> <input id="lastName" placeholder={lastname} onChange= { e => setLastNameValue(e.target.value)} />
				 		</form>
					</h1>
					<div className="buttons">
				 		<button className="edit-button" onClick={ ()=>{ handleClickSaveEdit()} }>Save</button>
				 		<button className="edit-button" onClick={ ()=>{ handleClickEdit()} }>Cancel</button>
					</div>
		  	</div>
			}
			<h2 className="sr-only">Accounts</h2>
			<AccountsCard />
		</>
		)
	
}



export default UserAccount;