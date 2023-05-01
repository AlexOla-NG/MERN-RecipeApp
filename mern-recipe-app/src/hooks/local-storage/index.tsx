import { useState, useEffect } from "react";

// NOTE: create hook to save and get items from localstorage
// hook was generated courtesy of chatGPT🤟🏾
// it takes 2 params: key & initialValue
// it returns 2 values: value of key & setValue to update key

type LocalStorageKey = string;

const useLocalStorage = <T,>(
	key: LocalStorageKey,
	initialValue?: T
): [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>] => {
	const [value, setValue] = useState<T | undefined>(() => {
		const storedValue = localStorage.getItem(key);
		return storedValue !== null ? JSON.parse(storedValue) : initialValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};

export default useLocalStorage;
