// Utility functions for localStorage with expiration
export const setItemWithExpiry = (key, value, daysToExpire = 6) => {
	const item = {
		value: value,
		expiry: new Date().getTime() + daysToExpire * 24 * 60 * 60 * 1000,
	};
	localStorage.setItem(key, JSON.stringify(item));
};

export const getItemWithExpiry = (key) => {
	const itemStr = localStorage.getItem(key);
	if (!itemStr) return null;

	const item = JSON.parse(itemStr);
	const now = new Date().getTime();

	if (now > item.expiry) {
		localStorage.removeItem(key);
		return null;
	}
	return item.value;
};
