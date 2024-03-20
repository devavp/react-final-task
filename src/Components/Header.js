import React, { useState } from 'react'
import '../Css/header.css'
import { searchRecipe } from '../Redux/Action';
import { useDispatch } from 'react-redux'



function Header() {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  function search() {
    dispatch(searchRecipe(value))
    setValue('')
  }
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      search();

    }
  }

  return (
    <>
      <div className='Header_cont'>
        <div><h1 className='Logo'>Recipe</h1></div>
        <div className='searchcontainer'> <div className='Search'>
          <input type="text" value={value} onKeyPress={handleKeyPress} onChange={(e) => setValue(e.target.value)} />
          <button onClick={search}>Search</button>
        </div></div>

      </div>
    </>
  )
}

export default Header