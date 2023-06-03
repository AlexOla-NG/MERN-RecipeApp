import { useState } from "react";
import { motion } from "framer-motion";

import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { IFormData, TokenSchema } from "../components/auth/interface";

const Auth = ({ handleTokenUpdate }: TokenSchema) => {
	const [view, setView] = useState("login");
	const defaultFormData: IFormData = {
		email: "",
		password: "",
	};

	const toggleView = () => {
		setView(view === "login" ? "register" : "login");
	};

	return (
		<motion.div
			initial={{ x: 300, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: -300, opacity: 0 }}
		>
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
		</motion.div>
	);
};

export default Auth;
