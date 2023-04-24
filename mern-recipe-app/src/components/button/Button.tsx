import { z } from "zod";

const buttonSchema = z
	.object({
		title: z.string(),
		type: z.enum(["submit", "button"]),
		onClick: z.function(),
	})
	.partial();

type IButton = z.infer<typeof buttonSchema>;

const Button = (props: IButton) => {
	const { title, type } = props;

	return (
		<button className="btn" type={type}>
			{title}
		</button>
	);
};

Button.defaultProps = {
	title: "login",
	type: "submit",
};

export default Button;
