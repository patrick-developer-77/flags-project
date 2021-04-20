import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import BorderCountry from './BorderCountry'

const SingleCountry = () => {
	const history = useHistory()
	const { id } = useParams()
	const [country, setCountry] = useState([])
	const [isError, setIsError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const url = `https://restcountries.eu/rest/v2/alpha/${id}`
		const fetchCountry = async () => {
			try {
				const res = await fetch(url)
				const json = await res.json()
				setCountry(json)
				setIsLoading(false)
			} catch(e) {
				setIsError(e)
			}
		}
		fetchCountry()
	}, [id])

	if (isError) return 'Failed to load resource';
  return isLoading ? 'Loading...' : (
		<>
			<div key={country.id}>
				<button className="btn btn-light" onClick={() => history.goBack()}>Back</button>
				<div className="fw-bold">{country.name}</div>
				<div className="row">
					<div className="col-5">
						<img src={country.flag} alt={country.name} className="img-fluid" />
					</div>
					<div className="offset-2 col">
						<h3>{country.name}</h3>
						<div className="row">
							<div className="col">
								<p><strong>Native Name:</strong> {country.nativeName}<br />
								<strong>Population:</strong> {country.population}<br />
								<strong>Region:</strong> {country.region}<br />
								<strong>Sub Region:</strong> {country.subregion}<br />
								<strong>Captial:</strong> {country.capital}</p>
							</div>
							<div className="col">
								<p><strong>Top Level Domain:</strong> {country.topLevelDomain}<br />
								<strong>Currencies:</strong> {country.currencies.map(currency => <span key={currency.name}>{currency.name}</span>) }<br />
								<strong>Language:</strong> {country.languages.map(lang => <span key={lang.name}>{lang.name}, </span> )}
								</p>
							</div>
						</div>
						<strong>Border Countries:</strong> {
							country.borders.map(border => (
								<>
									{/* <Link to={`/country/${border}/`} key={border}>
										<button style={{padding: '5px 10px', marginRight: '1rem'}}>{border}</button>
									</Link> */}
									<BorderCountry key={border.numericCode} abbreviation={border}>{border}</BorderCountry>
								</>
							))}
					</div>
				</div>
			</div>
		</>
	)
}

export default SingleCountry
