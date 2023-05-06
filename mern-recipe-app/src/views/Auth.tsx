import { useState } from "react";

import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { IFormData, TokenSchema } from "../components/auth/interface";

const Auth = ({ handleTokenUpdate }: TokenSchema) => {
	// NOTE: view is state that tracks which component is on the screen
	// toggleView will change the view

	const [view, setView] = useState("login");
	const defaultFormData: IFormData = {
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
					handleTokenUpdate={handleTokenUpdate}
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
