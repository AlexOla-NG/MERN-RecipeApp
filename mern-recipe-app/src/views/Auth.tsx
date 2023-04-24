import { Link } from "react-router-dom";
import Login from "../components/auth/Login";

// TODO: stopped here
// setup register component

const Auth = () => {
	const defaultFormData = {
		email: "",
		password: "",
	};
	return (
		<div className="form-wrapper">
			<Login defaultFormData={defaultFormData} />

			<p>
				{/* Don't have an account? <Link onClick={}>Sign up</Link> */}
			</p>
		</div>
	);
};

export default Auth;
