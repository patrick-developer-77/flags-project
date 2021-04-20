import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const BorderCountry = ({abbreviation}) => {
	const [country, setCountry] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		loadData()
	}, [abbreviation])

	const loadData = async () => {
		const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${abbreviation}`)
		const data = await response.json()
		setCountry(data)
		setIsLoading(false)
	}

	if (isLoading) {
		return ''
	}
	return (
		<Link to={`/country/${country.alpha3Code}/`} className="btn btn-light">{country.name}</Link>
	)
}

export default BorderCountry
