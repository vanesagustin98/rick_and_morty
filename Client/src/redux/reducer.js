const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };

        case 'REMOVE_FAV':
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };

        case "FILTER":
            const copyFilter = [...state.allCharacters].filter((character) => character.gender === action.payload)
            const filterCharacter = action.payload === 'all' ? state.allCharacters
                : copyFilter
            return {
                ...state,
                myFavorites: filterCharacter,
                filterGender: action.payload
            }

        case "ORDER":
            const characterOrder = state.filterGender === 'all' ? state.allCharacters
                : state.myFavorites
            let sorter
            if (action.payload === 'A') {
                sorter = (a, b) => a.id - b.id
            }
            if (action.payload === 'D') {
                sorter = (a, b) => b.id - a.id
            }
            const copyOrder = [...characterOrder].sort(sorter)
            return {
                ...state,
                myFavorites: copyOrder
            }

        default:
            return state
    }
}

export default reducer