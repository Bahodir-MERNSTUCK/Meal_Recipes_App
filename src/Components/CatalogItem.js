import React from 'react';
import { Link } from 'react-router-dom';

function CatalogItem(props) {
    const {idCategory,strCategory,strCategoryThumb,strCategoryDescription}=props;
    return (

<div className="card card-list" id={idCategory}>
  <img src={strCategoryThumb} className="card-img-top" alt={strCategory} />
  <div className="card-content">
    <h5 className="card-title">{strCategory}</h5>
    <p className="card-text">{strCategoryDescription.slice(0,70)}...</p>
    <div>
        <Link className='btn' to={`/category/${strCategory}`}>Watch</Link>
    </div>
  </div>
</div>

  
    );
}

export default CatalogItem;