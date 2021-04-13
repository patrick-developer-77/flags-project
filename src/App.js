import './App.css';
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Container from './components/Container'
import CountriesGrid from './components/CountriesGrid'

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <SearchBar />
        <CountriesGrid />
      </Container>
    </>
  );
}

export default App;
