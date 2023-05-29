import React, { useEffect, useState } from "react";
import { useGetSavedRecipes } from "../hooks/recipe";
import { getStoredUser } from "../storage";
import RecipeCard from "../components/card/RecipeCard";

const SavedRecipes = () => {
	const [recipes, setRecipes] = useState([]);
	const userID = getStoredUser();
	const { data, isSuccess } = useGetSavedRecipes(userID!);

	useEffect(() => {
		if (isSuccess) setRecipes(data);
	}, [isSuccess, data]);

	return (
		<main className="home">
			{recipes.map((recipe: any) => (
				<RecipeCard key={recipe._id} {...recipe} />
			))}
		</main>
	);
};

export default SavedRecipes;
