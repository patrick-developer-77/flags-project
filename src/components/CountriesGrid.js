import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'

const CountriesGrid = () => {
	const [countries, setCountries] = useState({})

	useEffect(() => {
		loadData()
	}, [])

	const loadData = async () => {
		const response = await fetch('https://restcountries.eu/rest/v2/all')
		const data = await response.json()
		setCountries(data)
	}

	return (
		<Container>
			<div className="countries-grid">
				{Object.entries(countries).map(([key, value]) => (
					<Link to={`country/${value.alpha3Code}`} key={key}>
						<div className="card">
							<div className="img-container">
								<img src={value.flag} alt={value.name} className="img-fluid" />
							</div>
							<div className="card-body">
								<h5 className="card-title">{value.name}</h5>
								<p>
									<strong>Population:</strong> {value.population}<br />
									<strong>Region:</strong> {value.region}<br />
									<strong>Capital:</strong> {value.capital}
								</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</Container>
	)
}

export default CountriesGrid
