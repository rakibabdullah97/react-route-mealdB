import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Meal from '../Meals/Meals';

const Resturant = () => {
    const [searchText, setSearchText] = useState('')
    const [meals, setMeals] = useState([])
    
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])
    const handleSearchfield = e => {
        const searchTextvalue = e.target.value;
        setSearchText(searchTextvalue);
    }
    return (
        <div >
            <input onChange={handleSearchfield} placeholder='Search Meals Here' type='text' />
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Resturant;