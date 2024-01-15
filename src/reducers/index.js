const initialState = {
	favourite: {
		list: [],
	},
};

const favouriteReducers = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_FAVOURITES":
			return { ...state, favourite: { ...state.favourite, list: [...state.favourite.list, action.payload] } };

		case "REMOVE_FAVOURITE":
			return {
				...state,
				favourite: {
					...state.favourite,
					list: [...state.favourite.list.filter((fav) => fav !== action.payload)],
				},
			};
		default:
			return state;
	}
};

export default favouriteReducers;
