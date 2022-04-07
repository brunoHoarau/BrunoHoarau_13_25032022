import { createStore } from 'redux'

const initState = {
	isAuth: false,
	JWT: null,
	firstname: null,
	lastname: null,
}


const reducer = (state = initState, action) => {
	if( action.type === "AuthSuccess"){
		return{
			...state,
			isAuth: true,
			JWT: action.payload,
			firstname: action.dataUser.firstName,
			lastname: action.dataUser.lastName
		}
	}
	
	return state

}

export const store = createStore(reducer)
store.subscribe( () => console.log(store.getState()))

