import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { useGetRecipeIDs, useGetRecipes, useSaveRecipe } from "../hooks/recipe";
import RecipeCard from "../components/card/RecipeCard";
import { getStoredUser } from "../storage";

const Home = () => {
	const [recipes, setRecipes] = useState([]);
	const [savedRecipes, setSavedRecipes] = useState<unknown[]>([]);
	const { data, isSuccess, isStale } = useGetRecipes();
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

	// STUB: set recipes state on successful API call
	useEffect(() => {
		if (isSuccess) setRecipes(data);
	}, [isSuccess]);

	// STUB: refetch recipes if data is stale
	useEffect(() => {
		if (isSuccess && !isStale) setRecipes(data);
	}, [isStale, data, isSuccess]);

	// STUB: if user is logged in, get saved recipes ID
	useEffect(() => {
		if (userID) {
			mutate(userID);
		}
	}, []);

	// STUB: set savedRecipes state on successful useGetRecipeIDs API call
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
		<motion.main
			className="home"
			initial={{ x: 300, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: -300, opacity: 0 }}
		>
			{recipes.map((recipe: any) => (
				<RecipeCard
					key={recipe._id}
					{...recipe}
					isSaved={isSaved}
					handleSaveRecipe={handleSaveRecipe}
				/>
			))}
		</motion.main>
	);
};

export default Home;
