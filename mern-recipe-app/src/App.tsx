import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./views/Home";
import Auth from "./views/Auth";
import CreateRecipe from "./views/CreateRecipe";
import SavedRecipes from "./views/SavedRecipes";
import Error from "./views/Error";
import Navbar from "./components/navigation/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="auth" element={<Auth />} />
				<Route path="create-recipe" element={<CreateRecipe />} />
				<Route path="saved-recipes" element={<SavedRecipes />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<ToastContainer />
		</>
	);
}

export default App;
