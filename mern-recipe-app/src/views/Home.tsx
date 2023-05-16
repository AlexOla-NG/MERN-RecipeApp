import React from "react";
import { useGetRecipes } from "../hooks/recipe";

const Home = () => {
	const { data } = useGetRecipes();
	console.log(data);

	return <div>Home</div>;
};

export default Home;
