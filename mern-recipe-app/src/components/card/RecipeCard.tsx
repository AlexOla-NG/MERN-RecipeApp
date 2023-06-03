import { useLocation } from "react-router-dom";
import { useIsMutating } from "@tanstack/react-query";
import { convertSecondToMinutes } from "../../utils";
import { getStoredUser } from "../../storage";
import Button from "../button/Button";

type RecipeCardProps = {
	_id: string;
	name: string;
	instructions: string;
	cookingTime: number;
	imageUrl: string;
	ingredients: string[];
	savedRecipeIDs: string[];
	isSaved?(recipeID: string): boolean;
	handleSaveRecipe?(id: string): void;
	handleDelete?(id: string): void;
};

const RecipeCard = ({
	_id,
	name,
	instructions,
	cookingTime,
	imageUrl,
	ingredients,
	isSaved,
	handleSaveRecipe,
	handleDelete,
}: RecipeCardProps) => {
	let location = useLocation();
	const loading = useIsMutating();
	const userID = getStoredUser();

	let output;
	if (location.pathname === "/" && userID && isSaved && handleSaveRecipe) {
		const isRecipeSaved = isSaved(_id);
		output = (
			<Button
				handleClick={() => handleSaveRecipe(_id)}
				disabled={loading == 1 || isRecipeSaved}
				title={isRecipeSaved ? `saved` : `save`}
			/>
		);
	}
	if (location.pathname === "/saved-recipes" && handleDelete) {
		output = (
			<Button
				handleClick={() => handleDelete(_id)}
				disabled={loading == 1}
				title="delete"
			/>
		);
	}

	return (
		<article className="recipe-card">
			<div className="image-wrapper">
				<img src={imageUrl} alt={name} loading="lazy" />
			</div>

			<div className="content">
				<div className="header">
					<h2>{name}</h2>
					{output}
				</div>
				<p>
					<span>instructions: </span>
					{instructions}
				</p>
				<p>
					<span>cooking time: </span>
					{convertSecondToMinutes(cookingTime)}
				</p>

				<ul>
					<span>ingredients: </span>
					{ingredients.map((ingredient) => (
						<li key={ingredient}>{ingredient}</li>
					))}
				</ul>
			</div>
		</article>
	);
};

RecipeCard.defaultProps = {
	name: "Recipe Title",
	instructions: "Recipe Description",
	cookingTime: 300,
	imageUrl:
		"https://images.pexels.com/photos/4144234/pexels-photo-4144234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	ingredients: [],
};

export default RecipeCard;
