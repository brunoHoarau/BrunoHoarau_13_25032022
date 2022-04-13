import featuresItem from "../../Datas/Features";
import './Features.css'

const Features = () => {
		return(
			<>
			{
				featuresItem.map( (elmt, key) => {
					return(
						<div className="feature-item" key={key}>
							<img src={elmt.img} alt="Chat Icon" className="feature-icon" />
        			<h3 className="feature-item-title">{elmt.title}</h3>
        			<p>{elmt.text}</p>
						</div>
						)
					})
				}
				</>
		)
}

export default Features;