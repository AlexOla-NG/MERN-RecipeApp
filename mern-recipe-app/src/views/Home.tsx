import React, { useEffect, useState } from "react";
import { useGetRecipeIDs, useGetRecipes } from "../hooks/recipe";
import RecipeCard from "../components/card/RecipeCard";
import { getStoredUser } from "../storage";

// TODO: stopped here
// find a way to get saved recipes IDs when a new recipe is saved

const Home = () => {
	const [recipes, setRecipes] = useState([]);
	const [savedRecipes, setSavedRecipes] = useState<unknown[]>([]);
	const { data, isSuccess } = useGetRecipes();
	const {
		data: recipeIDs,
		isSuccess: isSavedRecipeIDSuccess,
		mutate,
	} = useGetRecipeIDs();
	const userID = getStoredUser();

	// STUB: load recipes from API
	// if user is logged in, get saved recipes ID
	useEffect(() => {
		if (isSuccess) setRecipes(data);
		// if (userID) mutate(userID);
	}, [isSuccess]);

	// STUB: if user is logged in, get saved recipes ID
	useEffect(() => {
		getSavedRecipeIDs();
		// if (userID) mutate(userID);
	}, [userID]);

	// STUB: load saved recipes from API
	useEffect(() => {
		if (isSavedRecipeIDSuccess) {
			setSavedRecipes(recipeIDs?.savedRecipes);
			// saveRecipeIDs(recipeIDs?.savedRecipes);
		}
	}, [isSavedRecipeIDSuccess]);

	// STUB: returns boolean if recipeID is in savedRecipes
	// @param			recipeID: string
	// 						savedRecipeIDs: unknown[] @default is savedRecipes state value
	const isSaved = (recipeID: string) => {
		return savedRecipes?.includes(recipeID);
		// if (savedRecipes) {
		// 	let savedRecipeIDs: unknown[] = [...savedRecipes];
		// 	return savedRecipeIDs.includes(recipeID);
		// }
	};

	// STUB: get saved recipes IDs from API
	const getSavedRecipeIDs = () => {
		if (userID) mutate(userID);
	};

	// // STUB: save recipe IDs to savedRecipes state
	// const saveRecipeIDs = (recipeIDs: any) => {
	// 	setSavedRecipes(recipeIDs?.savedRecipes);
	// };

	return (
		<main className="home">
			{recipes.map((recipe: any) => (
				<RecipeCard
					key={recipe._id}
					{...recipe}
					savedRecipeIDs={savedRecipes}
					isSaved={isSaved}
					getSavedRecipeIDs={getSavedRecipeIDs}
					// saveRecipeIDs={saveRecipeIDs}
				/>
			))}
		</main>
	);
};

export default Home;
