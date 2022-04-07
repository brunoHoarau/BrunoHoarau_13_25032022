import { Component } from "react";
import UserAccount from "../../components/UserAccount/UserAccount";

class Profile extends Component {

	render(){
		return(
			<main class="main bg-dark">
				<UserAccount /> 
			</main>
		)
	}
}

export default Profile;