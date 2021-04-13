import React from 'react'

const SingleFlag = ({ name, flag, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders }) => {
	return (
		<div>
			<button className="back-btn" onClick={(e) => console.log(e.target)}>Back</button>
			<div className="row">
				<div className="col-4">
					<img src={flag} alt={name} />
				</div>
				<div className="offset-2 col">
					<h3>name</h3>
					<div className="row">
						<div className="col">
							<p><strong>Native Name:</strong> {nativeName}<br />
							<strong>Population:</strong> {population}<br />
							<strong>Region:</strong> {region}<br />
							<strong>Sub Region:</strong> {subregion}<br />
							<strong>Captial:</strong> {capital}</p>
						</div>
						<div className="col">
							<p><strong>Top Level Domain:</strong> {topLevelDomain}<br />
							<strong>Currencies:</strong> {currencies}<br />
							<strong>Language:</strong> {languages}</p>
						</div>
					</div>
					<strong>Border Countries:</strong> { borders.map(border => (`<button>${border}</button>`)) }
				</div>
			</div>
		</div>
	)
}

export default SingleFlag
