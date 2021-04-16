import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Container from './Container'

const CountriesGrid = () => {
	let history = useHistory()
	const [countries, setCountries] = useState({})

	useEffect(() => {
		loadData()
	}, [])

	const loadData = async () => {
		const response = await fetch('https://restcountries.eu/rest/v2/all')
		const data = await response.json()
		setCountries(data)
	}

	const redirect = (path) => {
		history.push(`country/${path}/`)
	}

	return (
		<Container>
			<div className="countries-grid">
				{Object.entries(countries).map(([key, value]) => (
					<div className="card" id={key} onClick={() => redirect(value.name)} key={key}>
						<img src={value.flag} alt={value.name} className="img-fluid" />
						<div className="card-body">
							<h5 className="card-title">{value.name}</h5>
							<p>
								<strong>Population:</strong> {value.population}<br />
								<strong>Region:</strong> {value.region}<br />
								<strong>Capital:</strong> {value.capital}
							</p>
						</div>
					</div>
				))}
			</div>
		</Container>
	)
}

export default CountriesGrid
