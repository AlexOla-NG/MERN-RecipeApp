// NOTE: create hook to save and get items from localstorage
// hook was generated courtesy of chatGPT🤟🏾
// it takes 2 params: key & initialValue
// and returns 3 values: value of key, setValue to update key, removeFromLocalStorage to remove key from localstorage

import { useState, useEffect } from "react";

type LocalStorageKey = string;

const useLocalStorage = <T,>(
	key: LocalStorageKey,
	initialValue?: T
): [
	T | undefined,
	(value?: T | ((prevValue: T | undefined) => T | undefined)) => void,
	() => void
] => {
	const [value, setValue] = useState<T | undefined>(() => {
		const storedValue = localStorage.getItem(key);
		return storedValue ? JSON.parse(storedValue) : initialValue;
	});

	const removeFromLocalStorage = () => {
		localStorage.removeItem(key);
	};

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue, removeFromLocalStorage];
};

export default useLocalStorage;

// import { useState, useEffect } from "react";

// type LocalStorageKey = string;

// const useLocalStorage = <T,>(
// 	key: LocalStorageKey,
// 	initialValue?: T
// ): [
// 	T | undefined,
// 	React.Dispatch<React.SetStateAction<T | undefined>>,
// 	() => void
// ] => {
// 	const [value, setValue] = useState<T | undefined>(() => {
// 		const storedValue = localStorage.getItem(key);
// 		return storedValue !== null ? JSON.parse(storedValue) : initialValue;
// 	});

// 	const removeFromLocalStorage = () => {
// 		localStorage.removeItem(key);
// 	};

// 	useEffect(() => {
// 		localStorage.setItem(key, JSON.stringify(value));
// 	}, [key, value]);

// 	return [value, setValue, removeFromLocalStorage];
// };

// export default useLocalStorage;
