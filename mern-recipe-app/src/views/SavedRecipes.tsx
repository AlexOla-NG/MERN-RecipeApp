import React, { useEffect, useState } from "react";
import { useGetSavedRecipes } from "../hooks/recipe";
import { getStoredUser } from "../storage";
import SavedRecipeCard from "../components/card/SavedRecipeCard";

// TODO: stopped here
// the data is not refreshing whenever we navigate to the page or when a new recipe is saved

const SavedRecipes = () => {
	const [recipes, setRecipes] = useState([]);
	const userID = getStoredUser();
	const { data, isSuccess } = useGetSavedRecipes(userID!);

	useEffect(() => {
		if (isSuccess) setRecipes(data);
		console.log("saved recipes page mounted");
	}, [isSuccess]);

	return (
		<main className="home">
			{recipes.map((recipe: any) => (
				<SavedRecipeCard key={recipe._id} {...recipe} />
			))}
		</main>
	);
};

export default SavedRecipes;
