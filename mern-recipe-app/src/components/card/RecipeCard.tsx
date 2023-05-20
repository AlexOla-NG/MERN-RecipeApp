import React, { useEffect, useState } from "react";
import { convertSecondToMinutes } from "../../utils";
import { getStoredUser } from "../../storage";
import { useGetRecipeIDs, useSaveRecipe } from "../../hooks/recipe";

// TODO: stopped here
// fix error: (intermediate value) is not iterable
// error pops up because we need to have a defined value for savedRecipes on first render

type RecipeCardProps = {
	_id: string;
	name: string;
	instructions: string;
	cookingTime: number;
	imageUrl: string;
	ingredients: string[];
};

const RecipeCard = ({
	_id,
	name,
	instructions,
	cookingTime,
	imageUrl,
	ingredients,
}: RecipeCardProps) => {
	const userID = getStoredUser() as string;
	const { data } = useGetRecipeIDs(userID);
	const { mutate, isLoading, isSuccess } = useSaveRecipe();
	const [savedRecipes, setSavedRecipes] = useState([...data?.savedRecipes]);
	const [isRecipeSaved, setIsRecipeSaved] = useState(false);

	useEffect(() => {
		if (savedRecipes?.length > 0) {
			setIsRecipeSaved(savedRecipes.includes(_id));
			// setIsRecipeSaved(isInArray(data, _id));
		}
	}, [savedRecipes]);

	useEffect(() => {
		if (isSuccess) {
			setSavedRecipes(data?.savedRecipes);
		}
	}, [isSuccess, data]);

	// STUB: trigger mutation for saving recipe
	const handleSaveRecipe = (id: string) => {
		const data = {
			recipeID: id,
			userID: getStoredUser(),
		};
		mutate(data);
		console.log("recipe saved");
	};

	return (
		<article className="recipe-card">
			<div className="image-wrapper">
				<img src={imageUrl} alt={name} loading="lazy" />
			</div>

			<div className="content">
				<div className="header">
					<h2>{name}</h2>
					<button
						onClick={() => handleSaveRecipe(_id)}
						disabled={isLoading || isRecipeSaved}
					>
						{isRecipeSaved ? `saved` : `save`}
					</button>
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
