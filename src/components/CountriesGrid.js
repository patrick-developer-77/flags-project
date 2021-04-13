import React, { useEffect, useState } from 'react'

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
		<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-5">
			{Object.entries(countries).map(([key, value]) => (
				<div class="col" key={key}>
					<div className="card" id={key} onClick={(e) => console.log(e.target.id)}>
						<img src={value.flag} alt={value.name} className="img-fluid" />
						<div className="card-body">
							<h5 className="card-title">{value.name}</h5>
							<p className="card-text small">
								<strong>Population:</strong> {value.population}<br />
								<strong>Region:</strong> {value.region}<br />
								<strong>Capital:</strong> {value.capital}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default CountriesGrid