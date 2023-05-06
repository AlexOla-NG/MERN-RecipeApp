import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import { TokenSchema } from "../auth/interface";
import { successAlert } from "../../utils";

const Navbar = ({ handleTokenUpdate, token }: TokenSchema) => {
	// STUB: set loginToken state to false on logout
	const handleLogout = () => {
		console.log("logout clicked!");
		if (handleTokenUpdate) {
			handleTokenUpdate(false);
			successAlert("Logged out successfully!");
		}
	};
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

			<div className="nav-links">
				<NavLink to="/">recipes</NavLink>
				<NavLink to="create-recipe">create recipe</NavLink>
				<NavLink to="saved-recipes">saved recipes</NavLink>
				{token ? (
					// TODO: fix this button.  onClick doesn't work
					// <Button
					// 	onClick={handleLogout}
					// 	title="logout"
					// 	type="button"
					// />
					<button onClick={handleLogout}>logout</button>
				) : (
					<NavLink to="auth">login/register</NavLink>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
