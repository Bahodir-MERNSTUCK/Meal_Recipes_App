import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import { getByFilter } from '../Api';
import MealList from '../Components/MealList';
import Loader from '../layout/Loader';

function Category(props) {
    const {name} = useParams();
    

    const [meals,setMeals] = useState([])

    useEffect(()=>{
        getByFilter(name).then(data=>{
            setMeals(data.meals)
        })
    },[name])

    return (
        <div>
         
            {!meals.length ? <Loader />:<MealList meals={meals} />}
        </div>
    );
}

export default Category;