import React, { useState } from 'react';

function Search({cb = Function.prototype}) {
    const [value,setValue] = useState('')

    const handleKey =(e)=>{
        if(e.key==="Enter"){
            handlSubmit()
        }
    }
    const handlSubmit=()=>{
        cb(value)
    }

    return (
        <div className='row'>
            <div className='input-field col s12'>
                <input 
                type='search'
                id='search-field'
                onKeyDown={handleKey}
                onChange={(e)=>setValue(e.target.value)}
                value={value}
                />
                <button
                className='btn'
                type='submit'
                style={{position:'absolute',top:0,right:0}}
                onClick={handlSubmit}
                >Search</button>
            </div>
        </div>
    );
}

export default Search;