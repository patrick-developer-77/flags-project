import Container from './Container'

const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark text-light mb-3 py-3">
			<Container>
				<span className="navbar-brand mb-0 h1">Where in the world?</span>
				<span className="dark-mode ms-auto">Dark Mode</span>
			</Container>
		</nav>
	)
}

export default Navbar