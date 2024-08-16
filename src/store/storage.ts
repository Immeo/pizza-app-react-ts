export function loadState<T>(key: string): T | undefined {
	try {
		const jsonState = localStorage.getItem(key);
		if (!jsonState) {
			return undefined;
		}
		return JSON.parse(jsonState);
	} catch (err) {
		console.error(err);
		return undefined;
	}
}

export function saveState<t>(state: t, key: string) {
	const stringState = JSON.stringify(state);
	localStorage.setItem(key, stringState);
}
