
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'


const initialState = { 
    favoritesFilm: "None"
 }

function toggleFavorite(state = initialState, action) {
    let nextState
    switch (action.type) {
        case action.TEST:
        return {
            ...state,
            favoritesFilm:"LOTR"
        }
        default:
            return state
    }
}

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  toggleFavorite
})
export default createRootReducer