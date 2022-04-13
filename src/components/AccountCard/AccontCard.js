import accountsDetails from "../../Datas/Accounts"

const AccountsCard = () => {
	return(
		<>
			{ accountsDetails.map( (elmt,key) => {
				return ( 
					<section className="account" key={key}>
					<div className="account-content-wrapper">
						<h3 className="account-title">Argent Bank Checking (x{elmt.coef})</h3>
						<p className="account-amount">{elmt.currency}{elmt.amount}</p>
						<p className="account-amount-description">Available Balance</p>
					</div>
					<div className="account-content-wrapper cta">
						<button className="transaction-button">View transactions</button>
					</div>
				</section>
					)
				})
			}
		</>
	)
}

export default AccountsCard;