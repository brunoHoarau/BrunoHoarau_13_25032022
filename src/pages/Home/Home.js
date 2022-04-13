import { Component  } from "react";
import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";

class Home extends Component {
	render(){
		return(
			<main>
				<Hero />
				<section className="features">
					<h2 className="sr-only">Features</h2>
					<Features />
				</section>
			</main>
		)
	}
}

export default Home;