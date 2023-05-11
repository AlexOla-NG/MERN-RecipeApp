import React from "react";

// TODO: stopped here
// finish setting up form

const CreateRecipe = () => {
	return (
		<main className="create-recipe">
			<h2>create recipe</h2>
			<form>
				<label htmlFor="name">
					name
					<input type="text" id="name" name="name" required />
				</label>
				<div>
					<label htmlFor="ingredients">
						ingredients
						<input
							type="text"
							id="ingredients"
							name="ingredients"
						/>
					</label>
					<button type="button">add ingredient</button>
				</div>
				<label htmlFor="instructions">
					instructions
					<textarea
						name="instructions"
						id="instructions"
						rows={5}
						cols={50}
					/>
				</label>
				<label htmlFor="imageUrl">
					imageUrl
					<input type="text" id="imageUrl" name="imageUrl" />
				</label>
				<label htmlFor="cookingTime">
					cooking time (mins)
					<input type="text" id="cookingTime" name="cookingTime" />
				</label>
				<button>submit</button>
			</form>
		</main>
	);
};

export default CreateRecipe;
