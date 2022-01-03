import React from 'react';
import { useParams, useHistory, useLocation, useRoutes } from 'react-router-dom';

function Terminal(props) {
    const {id} = useParams();
    // const value = useLocation()
   
    // console.log(value);
    return (
        <div>
            <h1>Count{id} </h1>
        </div>
    );
}

export default Terminal;