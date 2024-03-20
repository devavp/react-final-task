import { combineReducers } from "redux";
import recipeReducer from "./recipeReducer";



export const rootreducer = combineReducers({
    recipeStore:recipeReducer
    
})

