import { NavLink } from "react-router-dom";
import useLocalStorage from "../../hooks/local-storage";
import Button from "../button/Button";

// TODO: stopped here
// add functionality to logout button

const Navbar = () => {
	const [value, setValue] = useLocalStorage("auth");
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
				{value ? (
					<Button onClick={} title="logout" type="button" />
				) : (
					<NavLink to="auth">login/register</NavLink>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
