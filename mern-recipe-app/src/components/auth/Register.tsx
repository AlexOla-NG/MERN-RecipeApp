import React, { FormEvent, useState } from "react";

import { IAuth } from "./interface";
import Button from "../button/Button";

const Register = ({ defaultFormData, toggleView }: IAuth) => {
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
			<h2>signup</h2>
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

				<Button title="register" />
			</form>
			<p>
				Already have an account?{" "}
				<span onClick={toggleView}>Login in</span>
			</p>
		</section>
	);
};
export default Register;
