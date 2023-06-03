import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { useDeleteSavedRecipe, useGetSavedRecipes } from "../hooks/recipe";
import { getStoredUser } from "../storage";
import RecipeCard from "../components/card/RecipeCard";
import { useIsMutating } from "@tanstack/react-query";

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
	}, [isSuccess, isStale, savedRecipes]);

	// STUB: delete recipe
	const handleDelete = (id: string) => {
		let data = {
			recipeID: id,
			userID: userID!,
		};
		mutate(data);
	};

	return (
		<motion.main
			className="home"
			initial={{ x: 300, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: -300, opacity: 0 }}
		>
			{recipes?.map((recipe: any) => (
				<RecipeCard
					key={recipe._id}
					{...recipe}
					handleDelete={handleDelete}
				/>
			))}
		</motion.main>
	);
};

export default SavedRecipes;
