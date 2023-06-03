import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../../views/Home";
import Auth from "../../views/Auth";
import CreateRecipe from "../../views/CreateRecipe";
import SavedRecipes from "../../views/SavedRecipes";
import Error from "../../views/Error";
import { Token } from "../../storage";

type AnimatedRoutes = {
	handleTokenUpdate(token: Token): void;
};

const AnimatedRoutes = ({ handleTokenUpdate }: AnimatedRoutes) => {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait" initial={false}>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route
					path="auth"
					element={<Auth handleTokenUpdate={handleTokenUpdate} />}
				/>
				<Route path="create-recipe" element={<CreateRecipe />} />
				<Route path="saved-recipes" element={<SavedRecipes />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
