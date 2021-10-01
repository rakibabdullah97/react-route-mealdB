import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const MealDetails = () => {
    const {mealId} =useParams()
    const [meal,setmeal] =useState({})
    useEffect( ()=>{
        const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setmeal(data.meals[0]))
    },[])
    return (
        <div style={{ width: '16rem' }} className='container card'>
    
        <img  src={meal.strMealThumb} alt='' />
            <h1>Meal details of:{mealId}</h1>
            <h2>{meal.strMeal}</h2>
            <h3>{meal.strCategory}</h3>
            <h3>{meal.strArea}</h3>
            <p>{meal.strInstructions}</p>
            <Link to='/resturant'>back to Resturant</Link>
        </div>
    );
};

export default MealDetails;