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
	savedRecipeIDs: string[];
	isSaved(recipeID: string): boolean;
	getSavedRecipeIDs(): void;
	saveRecipeIDs(recipeIDs: any): void;
};

const RecipeCard = ({
	_id,
	name,
	instructions,
	cookingTime,
	imageUrl,
	ingredients,
	savedRecipeIDs,
	isSaved,
	getSavedRecipeIDs,
	saveRecipeIDs,
}: RecipeCardProps) => {
	// const [isRecipeSaved, setIsRecipeSaved] = useState(isSaved(_id));
	const { data, mutate, isLoading, isSuccess } = useSaveRecipe();

	useEffect(() => {
		if (isSuccess) getSavedRecipeIDs();
	}, [isSuccess]);

	// useEffect(() => {
	// 	if (isSuccess) setIsRecipeSaved(isSaved(_id));
	// }, [isSuccess]);

	// useEffect(() => {
	// 	if (isSuccess) saveRecipeIDs(data);
	// }, [isSuccess]);

	// STUB: trigger mutation for saving recipe
	const handleSaveRecipe = (id: string) => {
		const data = {
			recipeID: id,
			userID: getStoredUser(),
		};
		mutate(data);
		console.log("recipe saved");
		// getSavedRecipeIDs();
		// console.log("getSavedRecipeIDs called");
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
						disabled={isLoading || isSaved(_id)}
						// disabled={isLoading || isRecipeSaved}
					>
						{isSaved(_id) ? `saved` : `save`}
						{/* {isRecipeSaved ? `saved` : `save`} */}
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
