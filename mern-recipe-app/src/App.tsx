import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./views/Home";
import Auth from "./views/Auth";
import CreateRecipe from "./views/CreateRecipe";
import SavedRecipes from "./views/SavedRecipes";
import Error from "./views/Error";
import Navbar from "./components/navigation/Navbar";
import {
	Token,
	getLoginToken,
	removeLoginToken,
	removeUserID,
	setLoginToken as updateLoginToken,
} from "./storage";

function App() {
	// STUB: set token as loginToken state if token exists in local storage, else set to false
	const [loginToken, setLoginToken] = useState<Token>(
		getLoginToken() || false
	);

	// NOTE: useeffect is triggered when loginToken state is updated across all components
	useEffect(() => {
		// if loginToken is not false, update loginToken in localStorage; else remove loginToken & userID from localStorage
		if (loginToken) updateLoginToken(loginToken);
		else {
			removeLoginToken();
			removeUserID();
		}
	}, [loginToken]);

	// STUB: create function that updates loginToken state; pass to auth, navbar
	const handleTokenUpdate = (token: Token) => {
		setLoginToken(token);
	};

	return (
		<>
			<Navbar handleTokenUpdate={handleTokenUpdate} token={loginToken} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="auth"
					element={<Auth handleTokenUpdate={handleTokenUpdate} />}
				/>
				<Route path="create-recipe" element={<CreateRecipe />} />
				<Route path="saved-recipes" element={<SavedRecipes />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<ToastContainer />
		</>
	);
}

export default App;
