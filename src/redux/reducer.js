const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state= initialState,action)=>{
    switch (action.type) {
        case "ADD_FAV":
            return{
                ...state,
                allCharacters: [...state.allCharacters, action.payload]
            }
        case "REMOVE_FAV":
            return{
                ...state,
                myFavorites: state.myFavorites.filter((character)=> character.id!==action.payload)
            }

        case "FILTER":
            const copyFilter = [...state.allCharacters].filter((character)=> character.gender!==action.payload)
            return{
                ...state,
                myFavorites: copyFilter
            }

        case "ORDER":
            let sorter
            if (action.payload==='A') {
                sorter=(a,b)=> a.id - b.id
            }
            if (action.payload==='D') {
                sorter=(a,b)=> b.id - a.id
            }
            const copyOrder = [...state.allCharacters].sort(sorter)
            return{
                ...state,
                myFavorites: copyOrder
            }

        default:
            return state
    }
}

export default reducer