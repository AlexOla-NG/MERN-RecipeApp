import { FormEvent, useState } from "react";
import Button from "../button/Button";
import { IAuth } from "./interface";

// TODO: setup password input component, add a visibility toggle

const Login = ({ defaultFormData, toggleView }: IAuth) => {
	const [formData, setFormData] = useState(defaultFormData);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		setFormData(defaultFormData);
	};

	return (
		<section className="form-wrapper">
			<h2>login</h2>
			<form className="form" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Email"
					name="email"
					value={formData?.email}
					onChange={handleChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={formData?.password}
					onChange={handleChange}
				/>

				<Button />
			</form>
			<p>
				Don't have an account?{" "}
				<span onClick={toggleView}>Register</span>
			</p>
		</section>
	);
};

export default Login;
