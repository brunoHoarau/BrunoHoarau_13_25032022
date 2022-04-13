export const Auth_Logout = () => ({ type: "AuthLogout"})
export const Auth_Login = (payload, dataUser) => ({ type: "AuthSuccess", payload: payload, dataUser: dataUser})
export const edit_Action = () => ({type: "EditActivate"})
export const saveEdit_Action = (payload) => ({type: "SaveEdit", payload: payload})