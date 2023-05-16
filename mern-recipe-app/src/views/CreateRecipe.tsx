import React, { FormEvent, useState } from "react";

import { ReactComponent as MinusIcon } from "../assets/minus-icon.svg";
import { useSaveRecipes } from "../hooks/recipe";
import { getStoredUser } from "../storage";

// TODO: stopped here
// finish setting up form

const CreateRecipe = () => {
	const [formData, setFormData] = useState({
		name: "",
		ingredients: [""],
		instructions: "",
		imageUrl: "",
		cookingTime: 0,
		userOwner: getStoredUser(),
	});
	const { mutate } = useSaveRecipes();

	// STUB: general onchange handler
	const handleChange = (
		event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	// STUB: ingredient onchange handler
	const handleIngredientChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		idx: number
	) => {
		const { value } = event.target;

		const ingredients = formData.ingredients;
		ingredients[idx] = value;
		setFormData({ ...formData, ingredients });
	};

	// STUB: add ingredient to formData
	const addIngredient = () => {
		setFormData({
			...formData,
			ingredients: [...formData.ingredients, ""],
		});
	};

	// STUB: remove ingredient from formData
	const removeIngredient = (idx: number) => {
		const ingredients = formData.ingredients;

		ingredients.splice(idx, 1);

		setFormData({ ...formData, ingredients });
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		mutate(formData);
	};

	return (
		<main className="create-recipe">
			<h2>create recipe</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">
					name
					<input
						type="text"
						id="name"
						name="name"
						onChange={handleChange}
						required
					/>
				</label>
				<div className="ingredients-wrapper">
					<div>
						<label htmlFor="ingredients">ingredients</label>
						<button type="button" onClick={addIngredient}>
							add ingredient
						</button>
					</div>
					{formData.ingredients.map((ingredient, index) => (
						<div key={index} className="ingredient">
							<input
								name="ingredients"
								type="text"
								onChange={(event) =>
									handleIngredientChange(event, index)
								}
								value={ingredient}
								id="ingredients"
							/>
							<MinusIcon
								onClick={() => removeIngredient(index)}
							/>
						</div>
					))}
				</div>
				<label htmlFor="instructions">
					instructions
					<textarea
						name="instructions"
						id="instructions"
						onChange={handleChange}
						required
						rows={5}
						cols={50}
					/>
				</label>
				<label htmlFor="imageUrl">
					imageUrl
					<input
						type="url"
						id="imageUrl"
						name="imageUrl"
						onChange={handleChange}
						required
					/>
				</label>
				<label htmlFor="cookingTime">
					cooking time (mins)
					<input
						type="number"
						id="cookingTime"
						name="cookingTime"
						onChange={handleChange}
						required
					/>
				</label>
				<button>submit</button>
			</form>
		</main>
	);
};

export default CreateRecipe;
