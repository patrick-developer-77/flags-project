import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
// import SearchBar from './components/SearchBar'
import { Container } from 'react-bootstrap'
import CountriesGrid from './components/CountriesGrid'
import SingleCountry from './components/SingleCountry'

function App() {
	return (
		<Router>
			<Navbar />
			<Container>
				<Switch>
					<Route path="/country/:id">
						<SingleCountry />
					</Route>
					<Route path="/">
						{/* <SearchBar /> */}
						<CountriesGrid />
					</Route>
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
