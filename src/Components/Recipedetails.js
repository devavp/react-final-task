import { useSelector } from 'react-redux'
import { Link, Outlet, useParams } from 'react-router-dom';
import '../Css/recipedetails.css'


function Recipedetails() {

    const menuDetails = useSelector((state) => state.recipeStore.data) || []
    const { loading, error } = useSelector((state) => state.recipeStore)

    const { id } = useParams();
    console.log("Id", id);
    console.log("menuDetails", menuDetails)

    var details = menuDetails.filter(details => details.id === id)
    console.log("Details", details);

    if (loading) {
        return <div className='loadingContainer'><div className='Loading'>Loading...</div></div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }
    return (
        <>
            <div className='main-container'>
                <div className='back-container'> <Link to='/'><h1 className='backLink'>Back</h1></Link></div>

                <div className="recipe-main-container">
                    {details.map(details =>
                        <div className='RecipeContainer' key={id}>
                            <div className='Image'><img src={details.image} alt="recipe_img" /></div>

                            <div className='Details'>
                                <h2>{details.label}</h2>
                                <h3>cuisineType: <span>{details.cuisineType}</span></h3>
                                <h3>Meal Type: <span>{details.mealType}</span></h3>
                                <h3>Dish Type: <span>{details.dishType}</span></h3>
                                <h3>Diet Labels: <span>{details.dietLabels}</span></h3>
                                <h4>Calories: <span>{details.calories}</span></h4>
                                <h4>TotalWeight: <span>{details.totalWeight}</span></h4>

                            </div>

                        </div>
                    )}</div>
                <div className="recipe-main-container">
                    {details.map(details =>
                        <div className='RecipeContainer2' key={id}>
                            <h2>Ingrediants</h2>
                            <hr />
                            <div >
                                <div>{details.ingredients.map(ing => <div className='ing_cont' key={ing.foodId}>
                                    <div className='ingredients'>
                                        <div className='Ing_image'>
                                            <img src={ing.image} alt="img" />

                                        </div>
                                        <div className='Ing_details'>
                                            <h3>Food: {ing.food}</h3>
                                            <h3>Food category: {ing.foodCategory}</h3>
                                            <h3>Measure: {ing.measure}</h3>
                                            <h3>Quantity: {ing.quantity}</h3>
                                            <h3>Text: {ing.text}</h3>
                                            <h3>weight: {ing.weight}</h3>
                                        </div></div>
                                </div>)}
                                </div>

                            </div>

                        </div>
                    )}</div>
            </div>

        </>
    )
}
<Outlet />
export default Recipedetails