type User = {
	// define the properties of User type here
};

type Token = {
	// define the properties of Token type here
};

export function getStoredUser(): User | null {
	const storedUser = localStorage.getItem("user");
	return storedUser ? JSON.parse(storedUser) : null;
}

export function setStoredUser(user: unknown): void {
	localStorage.setItem("user", JSON.stringify(user));
}

// STUB: save login token to local storage
export function setLoginToken(token: unknown): void {
	localStorage.setItem("token", JSON.stringify(token));
}

// STUB: get login token from local storage
export function getLoginToken(): Token | null {
	const storedToken = localStorage.getItem("token");
	return storedToken ? JSON.parse(storedToken) : null;
}

// STUB: remove login token from local storage
export function removeLoginToken() {
	localStorage.removeItem("token");
}
