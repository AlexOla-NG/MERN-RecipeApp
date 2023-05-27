import React from "react";
import { convertSecondToMinutes } from "../../utils";

type RecipeCardProps = {
	_id: string;
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
				<div className="header">
					<h2>{name}</h2>
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
