import { combineReducers, createStore } from 'redux'
import produce from "immer"

export const initState = {
	isAuth: false,
	firstname: null,
	lastname: null,
	editUser: false
}

const reducer = (state = initState, action) => {
	if( action.type === "AuthSuccess"){
		return produce(state, (draft) =>{
			draft.isAuth = !draft.isAuth
			draft.firstname = action.dataUser.firstName
			draft.lastname = action.dataUser.lastName
		})
	}
	if( action.type === "EditActivate"){
		return produce( state, (draft) => {
			draft.editUser = !draft.editUser
		})
	}
	if( action.type === "SaveEdit"){
		return produce( state, (draft) => {
			draft.editUser = !draft.editUser
			if(action.payload.firstNameValue){
				draft.firstname = action.payload.firstNameValue
			}
			if(action.payload.lastNameValue){
				draft.lastname = action.payload.lastNameValue
			}
		})
	}
	if( action.type === "AuthLogout"){
		return(
			initState
		)
	}
	return state
}

export const store = createStore(reducer)
store.subscribe( () => console.log(store.getState()))

