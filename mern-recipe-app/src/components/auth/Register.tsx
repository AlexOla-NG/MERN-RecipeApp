import React, { FormEvent, useEffect, useState } from "react";

import { IAuth } from "./interface";
import Button from "../button/Button";
import { useRegister } from "../../hooks/auth";

const Register = ({ defaultFormData, toggleView }: IAuth) => {
	const { mutate, isLoading, isSuccess } = useRegister();
	const [formData, setFormData] = useState(defaultFormData);

	useEffect(() => {
		if (isSuccess) setFormData(defaultFormData);
	}, [isSuccess]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		mutate(formData);
	};

	return (
		<section>
			<div className="form-wrapper">
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

					<Button disabled={isLoading} title="register" />
				</form>
				<p>
					Already have an account?{" "}
					<a onClick={toggleView}>Login in</a>
				</p>
			</div>
		</section>
	);
};
export default Register;
