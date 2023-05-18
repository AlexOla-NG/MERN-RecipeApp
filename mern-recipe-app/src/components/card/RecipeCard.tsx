import React from "react";
import { convertSecondsToHours } from "../../utils";

// TODO: stopped here
// style the recipe card

type RecipeCardProps = {
	name: string;
	instructions: string;
	cookingTime: number;
	imageUrl: string;
	ingredients: string[];
};

const RecipeCard = ({
	name,
	instructions,
	cookingTime,
	imageUrl,
	ingredients,
}: RecipeCardProps) => {
	return (
		<article className="recipe-card">
			<div className="image-wrapper">
				<img src={imageUrl} alt={name} loading="lazy" />
			</div>

			<div className="content">
				<h2>{name}</h2>
				<p>{instructions}</p>
				<p>Cooking Time: {convertSecondsToHours(cookingTime)} mins</p>

				<ul>
					{ingredients.map((ingredient, index) => (
						<li key={index}>{ingredient}</li>
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
