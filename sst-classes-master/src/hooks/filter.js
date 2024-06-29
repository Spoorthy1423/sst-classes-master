export function selectCategory(category) {
    return {
        type: "SELECT_CATEGORY",
        payload: category
    }
}

function filterReducer(state = {
    category: "",
    searchQuery: ""
}, action) { 
    switch (action.type) {
        case "SELECT_CATEGORY": {
            return {
                ...state,
                category: action.payload
            }
        }
        case "SEARCH_PRODUCT": {
            return {
                ...state,
                searchQuery: action.payload
            }
        }
        default:
            return state;
    }
}

export default filterReducer;

