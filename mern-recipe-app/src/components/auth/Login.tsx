import { FormEvent, useEffect, useState } from "react";
import Button from "../button/Button";
import { IAuth } from "./interface";
import { useLogin } from "../../hooks/auth";
import useLocalStorage from "../../hooks/local-storage";
import { setLoginToken } from "../../storage";

// TODO: setup password input component, add a visibility toggle

const Login = ({ defaultFormData, toggleView }: IAuth) => {
	const { data, isLoading, isSuccess, mutate } = useLogin();
	// const [_, setValue] = useLocalStorage("auth");

	const [formData, setFormData] = useState(defaultFormData);

	useEffect(() => {
		if (data && isSuccess) {
			setLoginToken(data.token);

			// setValue(data);
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
