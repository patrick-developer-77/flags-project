import Container from './Container'

const Navbar = () => {
	return (
		<Container>
			<div className="navbar">
				<span className="navbar-brand mb-0 h1">Where in the world?</span>
				<span className="dark-mode ms-auto">Dark Mode</span>
			</div>
		</Container>
	)
}

export default Navbar