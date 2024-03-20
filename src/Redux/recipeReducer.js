import { ADD_RECIPE, ADD_RECIPE_SUCCESS, SEARCH_RECIPE, SEARCH_RECIPE_ERROR, SEARCH_RECIPE_SUCCESS, SET_ERROR,} from "./Constants";

let initialState = {
    data: [],
    loading: false,
    error: null
}

const recipeReducer = (state = initialState, action) => {
    console.log("data", state.data);
    switch (action.type) {
        case ADD_RECIPE:
            console.warn("reducer", state);
            console.warn("type", state.data);
            // console.warn("reducer1",action.data.hits[0].recipe.label)
            // const filterData = action.data.foreach((rec)=>rec.recipe)
            // const recipeId = action.data.hits.map((val)=>({
            //     id:nanoid(),
            //     ...val.recipe
            // }));
            return {
                ...state,
                loading: true
            };
            case SEARCH_RECIPE:
                return{
                    ...state,
                    loading:true
                }
        case ADD_RECIPE_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case SEARCH_RECIPE_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            }
        case SEARCH_RECIPE_ERROR:
            return {
                type: SEARCH_RECIPE_ERROR,
                loading: false
            }
        default:
            return state;
    }
};

export default recipeReducer;
