import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
// import SearchBar from './components/SearchBar'
import { Container } from 'react-bootstrap'
import CountriesGrid from './components/CountriesGrid'
import SingleCountry from './components/SingleCountry'

function App() {
	return (
    <BrowserRouter>
			<Navbar />
			<main>
				<Container>
					<Switch>
						<Route path="/country/:id">
							<SingleCountry />
						</Route>
						<Route exact path="/">
							<CountriesGrid />
						</Route>
					</Switch>
				</Container>
			</main>
		</BrowserRouter>
	);
}

export default App;
