import React, { useEffect, useState } from "react";
import { useGetRecipes } from "../hooks/recipe";
import RecipeCard from "../components/card/RecipeCard";

const Home = () => {
	const [recipes, setRecipes] = useState([]);
	const { data, isSuccess } = useGetRecipes();

	useEffect(() => {
		if (isSuccess) setRecipes(data);
	}, [isSuccess]);

	return (
		<div>
			{recipes.map((recipe: any) => (
				<RecipeCard key={recipe.id} {...recipe} />
			))}
		</div>
	);
};

export default Home;
