const favouritesReducers = (state = { favourites: null }, action) => {
	switch (action.type) {
		case "ADD_FAVOURITES":
			return { user: action.payload };
		case "REMOVE_FAVOURITES":
			return { user: null };
		default:
			return state;
	}
};

export default favouritesReducers;
