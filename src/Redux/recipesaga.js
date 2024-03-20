import { put, takeEvery } from 'redux-saga/effects'
import { ADD_RECIPE, SEARCH_RECIPE} from './Constants'
import { nanoid } from 'nanoid'
import { recipeError, recipeSuccess, searchrecipeError, searchrecipeSuccess } from './Action';

const key = "&app_id=a5de3521&app_key=28f8a20bd893e2740e68d4bbb349b977&from=0&to=50"
//const rec="pizza"
const recipeid = () => nanoid();
console.log("recipe", recipeid)
function* getRecipe() {
    try {
        //yield put({ type: SET_LOADING, loading: true })
        let data = yield fetch(`https://api.edamam.com/search?q=chicken${key}`)
        // let data = yield fetch("http://localhost:4000/")
        data = yield data.json()
        data = data.hits.map(recipe => ({
            id: recipeid(),
            ...recipe.recipe
        }));
        console.warn("saga", data)
        yield put(recipeSuccess(data))

    }
    catch (error) {
        yield put(recipeError(error.message))
    }
}

function* searchRecipe(data) {
    try {
        //yield put({ type: SET_LOADING, loading: true })
        let result = yield fetch(`https://api.edamam.com/search?q=${data.query}${key}`)
        console.log("querry", data.query)
        console.log("querry", data)
        result = yield result.json()
        const recipeId = result.hits.map(recipe => ({
            id: recipeid(),
            ...recipe.recipe
        }));
        console.warn("sagarecipe", result)
        yield put(searchrecipeSuccess(recipeId))
    }
    catch (error) {
        yield put(searchrecipeError(error.message))
    }
}

function* recipeSaga() {
    yield takeEvery(ADD_RECIPE, getRecipe)
    yield takeEvery(SEARCH_RECIPE, searchRecipe)
}

export default recipeSaga