import React from 'react';
import RecipeItem from './RecipeItem';

function RecipeList({recipes}) {
    return (
        <div className='listRecipe'>
            {recipes.map(recipe=>(
                <RecipeItem key={recipe.idMeal} {...recipe} />
            ))}
        </div>
    );
}

export default RecipeList;