import { FormEvent, useEffect, useState } from "react";
import Button from "../button/Button";
import { IAuth } from "./interface";
import { useLogin } from "../../hooks/auth";

// TODO: setup password input component, add a visibility toggle

const Login = ({ defaultFormData, toggleView, handleTokenUpdate }: IAuth) => {
	const { data, isLoading, isSuccess, mutate } = useLogin();

	const [formData, setFormData] = useState(defaultFormData);

	// STUB: update loginToken state on login, reset form data
	useEffect(() => {
		if (data && isSuccess && handleTokenUpdate) {
			handleTokenUpdate(data.token);
			setFormData(defaultFormData);
		}
	}, [isSuccess, data]);

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

					<Button disabled={isLoading} />
				</form>
				<p>
					Don't have an account?{" "}
					<a href="#" onClick={toggleView}>
						Register
					</a>
				</p>
			</div>
		</section>
	);
};

export default Login;
