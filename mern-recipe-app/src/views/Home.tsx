import React, { useEffect, useState } from "react";
import { useGetRecipeIDs, useGetRecipes } from "../hooks/recipe";
import RecipeCard from "../components/card/RecipeCard";
import { getStoredUser } from "../storage";

// TODO: stopped here
// fix 404 from useGetRecipeIDs
// error is coming up because userID is not in database
// please fix

const Home = () => {
	const [recipes, setRecipes] = useState([]);
	const [savedRecipes, setSavedRecipes] = useState([]);
	const { data, isSuccess } = useGetRecipes();
	const {
		data: recipeIDs,
		isSuccess: isSavedSuccess,
		mutate,
	} = useGetRecipeIDs();
	const userID = getStoredUser();

	// STUB: load recipes from API
	useEffect(() => {
		if (isSuccess) setRecipes(data);
	}, [isSuccess]);

	// STUB: initiate call to get saved recipes ID
	useEffect(() => {
		if (userID) {
			mutate(userID);
		}
	}, [userID]);

	// STUB: load saved recipes from API
	useEffect(() => {
		if (isSavedSuccess) setSavedRecipes(recipeIDs);
	}, [isSavedSuccess]);

	return (
		<main className="home">
			{recipes.map((recipe: any) => (
				<RecipeCard
					key={recipe._id}
					{...recipe}
					savedRecipeIDs={savedRecipes}
				/>
			))}
		</main>
	);
};

export default Home;
