import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../Api';
import Loader from '../layout/Loader';
import RecipeList from './RecipeList';

function Recipe(props) {
    const {id} = useParams();
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        getMealById(id).then(data=>{
            setRecipes(data.meals)
        })
    },[id])

    return (
        <div>
          {!recipes.length ? <Loader />:<RecipeList recipes={recipes} /> }  
        </div>
    );
}

export default Recipe;