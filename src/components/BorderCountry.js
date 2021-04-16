import { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
const BorderCountry = ({abbreviation}) => {
	const [country, setCountry] = useState({})
	const [isLoading, setIsLoading] = useState(true)
	let history = useHistory()

	const redirect = (path) => {
		history.push(`../../country/${path}/`)
	}

	useEffect(() => {
		loadData()
	}, [])

	const loadData = async () => {
		const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${abbreviation}`)
		const data = await response.json()
		setCountry(data)
		console.log(data)
		setIsLoading(false)
	}

	if (isLoading) {
		return ''
	}
	return (
		<Link to={`../../country/${country.name}/`}>{country.name}</Link>
		// <button style={{padding: '5px 10px', marginRight: '1rem'}} onClick={() => redirect(country.name)}>{country.name}</button>
	)
}

export default BorderCountry
