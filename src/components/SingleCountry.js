import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SingleCountry = () => {
	const { countryName } = useParams()
	const [country, setCountry] = useState([])
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const url = `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`
		const loadData = async () => {
			try {
				setIsLoading(true)
				const response = await fetch(url)
				const data = await response.json()
				console.log(data)
				setCountry(data)
			} catch(e) {
				setError(e)
			} finally {
				setIsLoading(false)
			}
		}
		loadData()
	}, [])

	if (error) return 'Failed to load resource';
  return isLoading ? 'Loading...' : (
		<>
			{country.map(item => (
				<div key={item.id}>
					<button className="btn btn-dark back-btn" onClick={(e) => console.log(e.target)}>Back</button>
					<div className="fw-bold">{item.name}</div>
					<div className="row">
						<div className="col-5">
							<img src={item.flag} alt={item.name} className="img-fluid" />
						</div>
						<div className="offset-2 col">
							<h3>{item.name}</h3>
							<div className="row">
								<div className="col">
									<p><strong>Native Name:</strong> {item.nativeName}<br />
									<strong>Population:</strong> {item.population}<br />
									<strong>Region:</strong> {item.region}<br />
									<strong>Sub Region:</strong> {item.subregion}<br />
									<strong>Captial:</strong> {item.capital}</p>
								</div>
								<div className="col">
									<p><strong>Top Level Domain:</strong> {item.topLevelDomain}<br />
									<strong>Currencies:</strong> {item.currencies.map(currency => <span key={currency.name}>{currency.name}</span>) }<br />
									<strong>Language:</strong> {item.languages.map(lang => <span key={lang.name}>{lang.name}, </span> )}
									</p>
								</div>
							</div>
							<strong>Border Countries:</strong> { item.borders.map(border => <Link to={`/country/${border.name}/`} className="btn btn-light btn-sm">{border}</Link>) }
						</div>
					</div>
				</div>
				))}
		</>
	)
}

export default SingleCountry
