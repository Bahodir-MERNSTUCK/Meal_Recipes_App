import React from 'react';
import { Link } from 'react-router-dom';

function MealItem(props) {
    const {strMeal,strMealThumb,idMeal} = props;
    return (
        <div className="card card-list" id={idMeal}>
        <img src={strMealThumb} className="card-img-top" alt={strMeal} />
        <div className="card-content">
          <h5 className="card-title">{strMeal}</h5>
          <div>
              <Link className='btn' to={`/meals/${idMeal}`}>Watch Recipe</Link>
          </div>
        </div>
      </div>
    );
}

export default MealItem;