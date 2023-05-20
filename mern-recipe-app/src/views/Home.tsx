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
		<main className="home">
			{recipes.map((recipe: any) => (
				<RecipeCard key={recipe._id} {...recipe} />
			))}
		</main>
	);
};

export default Home;
