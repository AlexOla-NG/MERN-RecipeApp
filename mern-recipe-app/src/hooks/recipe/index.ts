import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../axios-Instance";
import { queryKeys } from "../../react-query/constants";
import { errorAlert, successAlert } from "../../utils";
import { UserID } from "../../storage";

const createRecipe = async (formData: unknown) => {
	const res = await axiosInstance.post("/recipes", formData, {
		headers: {
			"Content-Type": "application/json",
		},
	});

	return res?.data?.data;
};

const saveRecipe = async (data: unknown) => {
	const res = await axiosInstance.put("/recipes", data, {
		headers: {
			"Content-Type": "application/json",
		},
	});

	return res?.data?.data;
};

const getRecipes = async () => {
	const res = await axiosInstance.get("/recipes", {
		headers: {
			"Content-Type": "application/json",
		},
	});

	return res?.data;
};

// STUB: get a list of all recipe IDs that a logged in user has saved
const getRecipeIDs = async (userID: UserID) => {
	const res = await axiosInstance.get(`/savedRecipes/ids/${userID}`);
	return res?.data;
};

export const useCreateRecipe = () => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { isSuccess, mutate, isLoading } = useMutation({
		mutationFn: (formData: unknown) => createRecipe(formData),
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.recipe]);
			successAlert(`Recipe created successfully!`);
			setTimeout(() => {
				navigate("/");
			}, 3000);
		},
		onError: (error) => {
			errorAlert(error);
		},
	});

	return { isSuccess, mutate, isLoading };
};

export const useSaveRecipe = () => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { isSuccess, mutate, isLoading } = useMutation({
		mutationFn: (data: unknown) => saveRecipe(data),
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.recipes]);
			successAlert(`Recipe saved successfully!`);
			setTimeout(() => {
				navigate("/saved-recipes");
			}, 3000);
		},
		onError: (error) => {
			errorAlert(error);
		},
	});

	return { isSuccess, mutate, isLoading };
};

export const useGetRecipes = () => {
	const fallback = [""];
	const {
		data = fallback,
		isLoading,
		isSuccess,
	} = useQuery({
		queryKey: [queryKeys.recipes],
		queryFn: () => getRecipes(),
		onSuccess: () => {
			successAlert(`Recipes loaded successfully!`);
		},
		onError: (error) => {
			console.error(error);

			errorAlert(error);
		},
	});
	return { data, isSuccess, isLoading };
};

// export const useGetRecipeIDs = (userID: UserID) => {
// 	const fallback = [""];
// 	const {
// 		data = fallback,
// 		isLoading,
// 		isSuccess,
// 	} = useQuery({
// 		queryKey: [queryKeys.recipes, userID],
// 		queryFn: () => getRecipeIDs(userID),
// 		onSuccess: () => {
// 			successAlert(`Recipes loaded successfully!`);
// 		},
// 		onError: (error) => {
// 			console.error(error);

// 			errorAlert(error);
// 		},
// 	});
// 	return { data, isSuccess, isLoading };
// };

export const useGetRecipeIDs = () => {
	const { isSuccess, mutate, data } = useMutation({
		mutationFn: (userID: UserID) => getRecipeIDs(userID),
		onSuccess: () => {
			successAlert(`Recipes loaded successfully!`);
		},
		onError: (error) => {
			console.error(error);
			errorAlert(error);
		},
	});

	return { isSuccess, mutate, data };
};
