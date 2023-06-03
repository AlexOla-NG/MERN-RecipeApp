import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
interface PasswordInputProps {
	name: string;
	placeholder: string;
	value?: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = ({
	name,
	placeholder,
	value,
	handleChange,
}: PasswordInputProps) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(event);
	};

	const handleToggleVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="password-input">
			<input
				type={showPassword ? "text" : "password"}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleInputChange}
			/>
			{showPassword ? (
				<FaEye onClick={handleToggleVisibility} />
			) : (
				<FaEyeSlash onClick={handleToggleVisibility} />
			)}
		</div>
	);
};

export default PasswordInput;
