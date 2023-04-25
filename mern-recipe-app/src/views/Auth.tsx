import { Link } from "react-router-dom";
import Login from "../components/auth/Login";
import { useState } from "react";
import Register from "../components/auth/Register";

// TODO: stopped here
// setup register component

// NOTE: view is state that tracks which component is on the screen
// toggleView will change the view

const Auth = () => {
	const [view, setView] = useState("login");
	const defaultFormData = {
		email: "",
		password: "",
	};

	const toggleView = () => {
		setView(view === "login" ? "register" : "login");
	};

	return (
		<>
			{view === "login" && (
				<Login
					defaultFormData={defaultFormData}
					toggleView={toggleView}
				/>
			)}
			{view === "register" && (
				<Register
					defaultFormData={defaultFormData}
					toggleView={toggleView}
				/>
			)}
		</>
	);
};

export default Auth;
