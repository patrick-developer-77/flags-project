import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Container from './components/Container'
import CountriesGrid from './components/CountriesGrid'
import SingleCountry from './components/SingleCountry'

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
      <Switch>
          <Route path="/" exact>
            <SearchBar />
            <CountriesGrid />
          </Route>
          <Route path="/country/:countryName" component={ SingleCountry } />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
