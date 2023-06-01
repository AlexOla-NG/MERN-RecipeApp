import React, { useEffect, useState } from "react";
import { useDeleteSavedRecipe, useGetSavedRecipes } from "../hooks/recipe";
import { getStoredUser } from "../storage";
import RecipeCard from "../components/card/RecipeCard";
import { useIsMutating } from "@tanstack/react-query";

// TODO: stopped here
// recipes state data does not update when a recipe has been added in Home

const SavedRecipes = () => {
	const [recipes, setRecipes] = useState([]);
	const loading = useIsMutating();
	const userID = getStoredUser();
	const {
		data: savedRecipes,
		isSuccess,
		isStale,
	} = useGetSavedRecipes(userID!);
	const { mutate } = useDeleteSavedRecipe();

	useEffect(() => {
		if (isSuccess || !loading) setRecipes(savedRecipes?.savedRecipes);
	}, [isSuccess, isStale]);

	// STUB: delete recipe
	const handleDelete = (id: string) => {
		let data = {
			recipeID: id,
			userID: userID!,
		};
		mutate(data);
	};

	return (
		<main className="home">
			{recipes?.map((recipe: any) => (
				<RecipeCard
					key={recipe._id}
					{...recipe}
					handleDelete={handleDelete}
				/>
			))}
		</main>
	);
};

export default SavedRecipes;
