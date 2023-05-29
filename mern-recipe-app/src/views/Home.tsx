import React, { useEffect, useState } from "react";
import { useGetRecipeIDs, useGetRecipes, useSaveRecipe } from "../hooks/recipe";
import RecipeCard from "../components/card/RecipeCard";
import { getStoredUser } from "../storage";

const Home = () => {
	const [recipes, setRecipes] = useState([]);
	const [savedRecipes, setSavedRecipes] = useState<unknown[]>([]);
	const { data, isSuccess } = useGetRecipes();
	const {
		mutate: saveRecipe,
		data: savedRecipeIDs,
		isSuccess: isSavedRecipeSuccess,
	} = useSaveRecipe();
	const {
		data: recipeIDs,
		isSuccess: isSavedRecipeIDSuccess,
		mutate,
	} = useGetRecipeIDs();
	const userID = getStoredUser();

	// STUB: load recipes from API
	useEffect(() => {
		if (isSuccess) setRecipes(data);
	}, [isSuccess]);

	// STUB: if user is logged in, get saved recipes ID
	useEffect(() => {
		getSavedRecipeIDs();
	}, []);

	// STUB: load saved recipes from API on component mount
	useEffect(() => {
		if (isSavedRecipeIDSuccess && recipeIDs) {
			setSavedRecipes(recipeIDs?.savedRecipes);
		}
	}, [isSavedRecipeIDSuccess, recipeIDs]);

	// STUB: update savedRecipes state on successfully saving new recipe
	useEffect(() => {
		if (isSavedRecipeSuccess) {
			setSavedRecipes(savedRecipeIDs?.savedRecipes);
		}
	}, [isSavedRecipeSuccess, savedRecipeIDs]);

	// STUB: get saved recipes IDs from API
	const getSavedRecipeIDs = () => {
		if (userID) mutate(userID);
	};

	// STUB: save recipe to API
	// @param			id: string
	const handleSaveRecipe = (id: string) => {
		const data = {
			recipeID: id,
			userID: userID,
		};
		saveRecipe(data);
	};

	// STUB: returns boolean if recipeID is in savedRecipes
	// @param			recipeID: string
	const isSaved = (recipeID: string) => {
		return savedRecipes?.includes(recipeID);
	};

	return (
		<main className="home">
			{recipes.map((recipe: any) => (
				<RecipeCard
					key={recipe._id}
					{...recipe}
					isSaved={isSaved}
					handleSaveRecipe={handleSaveRecipe}
				/>
			))}
		</main>
	);
};

export default Home;
