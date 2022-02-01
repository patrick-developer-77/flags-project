import Container from './Container'

const Navbar = () => {
	return (
		<header>
			<Container>
				<div className="navbar">
					<span className="navbar-brand mb-0 h1">Where in the world?</span>
					<span className="dark-mode ms-auto"><img src={'../img/moon-outline.svg'} alt="moon icon"/> Dark Mode</span>
				</div>
			</Container>
		</header>
	)
}

export default Navbar