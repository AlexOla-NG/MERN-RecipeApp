import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../axios-Instance";
import { queryKeys } from "../../react-query/constants";
import { errorAlert, successAlert } from "../../utils";

// TODO: stopped here
// debug error on useGetRecipes

const saveRecipes = async (formData: unknown) => {
	const res = await axiosInstance.post("/recipes", formData, {
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

export const useSaveRecipes = () => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { isSuccess, mutate, isLoading } = useMutation({
		mutationFn: (formData: unknown) => saveRecipes(formData),
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