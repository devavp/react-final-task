import { ADD_RECIPE,ADD_RECIPE_SUCCESS,SEARCH_RECIPE, SET_ERROR,SEARCH_RECIPE_ERROR,SEARCH_RECIPE_SUCCESS } from "./Constants";

export function addRecipe(){
    
    return{
        type:ADD_RECIPE,
        
        loading:true
    }
}

export function recipeSuccess(data){
return{
    type:ADD_RECIPE_SUCCESS,
    data
}
}
export function recipeError(){
    return{
        type:SET_ERROR,
        error:null
    }
}
export function searchRecipe(query){
    
    return{
        type:SEARCH_RECIPE,
        query
        
    }
}

export function searchrecipeSuccess(data){
    return{
        type:SEARCH_RECIPE_SUCCESS,
        data
    }
    }
    export function searchrecipeError(){
        return{
            type:SEARCH_RECIPE_ERROR,
            error:null
        }
    }