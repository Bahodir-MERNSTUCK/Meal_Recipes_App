import React from 'react';
import CatalogItem from './CatalogItem';

function CatalogList({catalog=[]}) {
    return (
        <div className="list" >
            {catalog.map(item=>(
                <CatalogItem key={item.idCategory} {...item}/>
            ))}
        </div>

    );
}

export default CatalogList;