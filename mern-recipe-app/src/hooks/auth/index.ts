import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../axios-Instance";
import { queryKeys } from "../../react-query/constants";
import { errorAlert, successAlert } from "../../utils";
import { IFormData } from "../../components/auth/interface";

// TODO: stopped here
// setup register & login hooks

const register = async (formData: IFormData) => {
	const res = await axiosInstance.post("/auth/register", {
		body: formData,
		headers: {
			"Content-Type": "application/json",
		},
	});

	return res?.data?.data;
};

export const useRegister = () => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { isSuccess, mutate, isLoading } = useMutation({
		mutationFn: (formData) => register(formData),
		onSuccess: () => {
			queryClient.invalidateQueries([queryKeys.result]);
			successAlert(`Response successfully submitted!`);
		},
		onError: (error) => {
			errorAlert(error);
		},
	});

	return { isSuccess, mutate, isLoading };
};
