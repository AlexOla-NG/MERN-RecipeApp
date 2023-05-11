import { NavLink } from "react-router-dom";
import { TokenSchema } from "../auth/interface";
import { successAlert } from "../../utils";

const Navbar = ({ handleTokenUpdate, token }: TokenSchema) => {
	// STUB: set loginToken state to false on logout
	const handleLogout = () => {
		if (handleTokenUpdate) {
			handleTokenUpdate(false);
			successAlert("Logged out successfully!");
		}
	};

	// STUB: render different navlinks depending on whether user is logged in/out
	let output;
	if (token) {
		output = (
			<>
				<NavLink to="/">recipes</NavLink>
				<NavLink to="create-recipe">create recipe</NavLink>
				<NavLink to="saved-recipes">saved recipes</NavLink>
				<button onClick={handleLogout}>logout</button>
			</>
		);
	} else {
		output = (
			<>
				<NavLink to="/">recipes</NavLink>
				<NavLink to="auth">login/register</NavLink>
			</>
		);
	}

	return (
		<nav className="nav">
			<input type="checkbox" id="nav-check" />
			<div className="nav-header">
				<div className="nav-title">Recipe App</div>
			</div>
			<div className="nav-btn">
				<label htmlFor="nav-check">
					<span></span>
					<span></span>
					<span></span>
				</label>
			</div>

			<div className="nav-links">{output}</div>
		</nav>
	);
};

export default Navbar;
