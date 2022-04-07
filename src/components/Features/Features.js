import { Component  } from "react";
import './Features.css'

class Features extends Component {
		
	render(){
		return(
			<div className="feature-item">
        <img src={this.props.img} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">{this.props.title}</h3>
        <p>{this.props.text}</p>
      </div>
	)
	
	
}
}

export default Features;