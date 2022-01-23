import '../App.css'

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-margin" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item" href="https://en.wikipedia.org/wiki/Rebel_Alliance">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Rebel_Alliance_logo.svg/1024px-Rebel_Alliance_logo.svg.png"
							width="25"
							height="25"
						/>
					</a>

					<a
						role="button"
						className="navbar-burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>

				<div id="navbarBasicExample" className="navbar-menu has-text-white">
					<div className="navbar-start">
						<a className="navbar-item">StarWars API Demo</a>

						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link">More Starwars Stuff</a>

							<div className="navbar-dropdown">
								<a href="https://starwars.fandom.com/wiki/Jedi" className="navbar-item"><i class="fas fa-jedi"></i> Jedi</a>
								<a href="https://starwars.fandom.com/wiki/Sith" className="navbar-item"><i class="fab fa-sith"></i> Sith</a>
								<a href="https://starwars.fandom.com/wiki/Galactic_Republic" className="navbar-item"><i class="fab fa-galactic-republic"></i> The Galactic Republic</a>
								<hr className="navbar-divider" />
								<a href="https://disneyworld.disney.go.com/shops/hollywood-studios/savis-workshop-handbuilt-lightsabers/"className="navbar-item">Build your own Lightsaber</a>
							</div>
						</div>
					</div>

					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<a className="button">
									<strong>Sign up</strong>
								</a>
								<a className="button is-light">Log in</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
