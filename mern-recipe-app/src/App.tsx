import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Auth from "./views/Auth";
import CreateRecipe from "./views/CreateRecipe";
import SavedRecipes from "./views/SavedRecipes";
import Error from "./views/Error";

// TODO: stopped here
// complete project setup: watch zod tutorial

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="auth" element={<Auth />} />
				<Route path="create-recipe" element={<CreateRecipe />} />
				<Route path="saved-recipes" element={<SavedRecipes />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
}

export default App;
