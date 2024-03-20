import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRecipe } from '../Redux/Action'
import '../Css/main.css'
import { Link } from 'react-router-dom'




function Main() {
  const menu = useSelector((state) => state.recipeStore.data) || [];
  const { loading, error } = useSelector((state) => state.recipeStore);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addRecipe())
  }, [])

  if (!menu || menu.length === 0) {
    return <div className='nodata'><div>No data available </div></div>
  }

  if (loading) {
    return <div className='loadingContainer'><div className='Loading'>Loading...</div></div>
  }
  if (error) {
    return <div>Error: {error}</div>
  }

  // let rmenu = menu.map((item) => item.label)


  return (
    <div>

      {console.log("menu", menu)}
      <div className='Recipe-Container'>

        {
          menu.map((item) => (
            <Link to={item.id} key={item.id} style={{ textDecoration: 'none' }}>
              <div className='Recipe-Item' key={item.uri}>
                <div className='Recipe-detail-cont'>
                  <div className='image'>
                    <img src={item.image} alt="recipe" />
                  </div>
                  <div className='detailscontainer'> <div className='details'>
                    <h1>{(item.label).substring(0, 15) + "..."}</h1>
                    <h2>Meal Type: <span>{item.mealType}</span></h2>
                  </div></div>
                </div>
              </div></Link>
          ))
        }

      </div>

    </div>


  )

}

export default Main