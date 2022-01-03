import React,{useState} from 'react';
import { Link } from 'react-router-dom';


function RecipeItem(props) {
    const {strMealThumb,idMeal,strMeasure,strMeal,strDrinkAlternate,strCategory,strArea,strInstructions,strYoutube} = props;
    const [toggle,setToggle] = useState(true);
    const Toggle =()=>{
        setToggle(!toggle)
    }

    return (
        <div className="card card-recipe" id={idMeal}>
        <div className="card-content">
            <img src={strMealThumb} alt={strDrinkAlternate} />
          <h5 className="card-title">{strCategory}</h5>
          <h6>{strMeal}</h6>
          <div>
              <p>{strInstructions}</p>
              <div>{toggle ? <button className='btn btn-danger mvc' onClick={Toggle}>Close Details</button>:<button className='btn btn-info mvc' onClick={Toggle}>More Details</button>}</div>
          </div>
         {toggle ? <div> <div className='movie'>
            {strYoutube ? (<div>
                <p>YouTube Recipe</p>
                <iframe src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} allowFullScreen title={idMeal}>{}</iframe>
            </div>): null}
            <span>{strArea !== null ? <p style={{padding:'10px',background:'royal', width:'10%',margin:'10px auto'}}>  {strArea}</p> : null}</span>
        </div>
       </div>: null}
       
       <div style={{marginBottom:'30px'}}>
       <Link className='btn' to={`/`}>Menu</Link>
   </div>
      </div>
      </div>
    );
}

export default RecipeItem;