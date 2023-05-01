import { NavLink } from "react-router-dom";
import useLocalStorage from "../../hooks/local-storage";
import Button from "../button/Button";
import { getLoginToken, removeLoginToken } from "../../storage";
import { useEffect, useState } from "react";

// TODO: stopped here
// loginToken value should change from null to string when user logs in, but it isn't
// plz fixx

const Navbar = () => {
	// const [value, setValue, removeFromLocalStorage] = useLocalStorage("auth");
	// const [loginToken, setLoginToken] = useState(getLoginToken());
	const loginToken = getLoginToken();
	console.log(loginToken);

	// useEffect(() => {
	// 	if (loginToken === null) getLoginToken();
	// }, [loginToken]);

	// STUB: remove value from localStorage onclick
	const handleClick = () => {
		console.log("logout clicked!");
		removeLoginToken();
		// setLoginToken(null);
		// setValue();
		// removeFromLocalStorage();
		console.log("logged out!");
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
				{loginToken ? (
					// TODO: fix this button.  onClick doesn't work
					// <Button
					// 	onClick={handleClick}
					// 	title="logout"
					// 	type="button"
					// />
					<button onClick={handleClick}>logout</button>
				) : (
					<NavLink to="auth">login/register</NavLink>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
