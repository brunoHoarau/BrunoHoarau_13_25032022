
class FetchData  {
	constructor(){
		this.isLoging = false;
		this.url= 'http://localhost:3001/api/v1/user';
		this.headers = {
			Accept: "application/json, text/plain, */*",
			'Content-Type': 'application/json',
		}
	}


	 getUserLogin = (payload) => {
		const urlLogin = `${this.url}/login` ;
		return fetch(urlLogin, {
			method: 'POST',
			headers: this.headers,
			body: JSON.stringify(payload)
		} )
		.then( res =>{ 
			if (res.status === 200 ) { 
				return res.json()
			}
		})
		.then( data => {
			return (data.body.token)
		})
		.catch( err => { console.log(err)})
	}

	getUserProfil = (token) => {
		const urlLogin = `${this.url}/profile` ;
			return fetch(urlLogin, {
				method: 'POST',
				headers: new Headers({
					'Authorization': 'Bearer '+token , 
					'Content-Type': 'application/x-www-form-urlencoded'
				}), 
				body: 'A=1&B=2'
			} )
			.then( res =>{ 
				if (res.status === 200 ) { 
					return res.json()
				}
			})
			.then( data => {
				return (data.body)
			})
			.catch( err => { console.log(err)})
		}
}



export default FetchData;