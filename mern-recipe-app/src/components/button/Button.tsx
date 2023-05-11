import { z } from "zod";

const buttonSchema = z
	.object({
		title: z.string(),
		type: z.enum(["submit", "button"]),
		disabled: z.boolean(),
		onClick: z.function(),
	})
	.partial();

type IButton = z.infer<typeof buttonSchema>;

// TODO: fix Button component, onclick does not work

const Button = (props: IButton) => {
	const { title, type, disabled } = props;

	return (
		<button className="btn" type={type} disabled={disabled}>
			{title}
		</button>
	);
};

Button.defaultProps = {
	title: "login",
	type: "submit",
};

export default Button;
