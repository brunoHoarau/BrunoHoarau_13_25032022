import { Component } from "react";
import "./Hero.css"

class Hero extends Component {


	render(){
		const titleH2 = "Promoted Content";
		const subtitle = ["No fees.","No minimum deposit.","High interest rates."]
		const text = "Open a savings account with Argent Bank today!"

		return(
			<div className="hero">
        <section className="hero-content">
					<h2 className="sr-only">{titleH2}</h2>
					{ subtitle.map( (elmt, key) => {
							return ( <p className="subtitle" key={key}>{elmt}</p>)
						})
					}
					<p className="text">{text}</p>
				</section>
			</div>
					)
}

}

export default Hero