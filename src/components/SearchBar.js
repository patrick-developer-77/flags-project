const SearchBar = () => {
	return (
		<div className="row">
			<div className="col">
				<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search for a country..." />
			</div>
			<div className="col">
				<select className="form-select" aria-label="Default select example">
					<option defaultValue>Filter by Region</option>
					<option value="1">Africa</option>
					<option value="2">America</option>
					<option value="3">Asia</option>
					<option value="4">Europe</option>
					<option value="5">Oceania</option>
				</select>
			</div>
		</div>
	)
}

export default SearchBar
