import React,{useState,useEffect} from 'react';
import { useLocation, useSearchParams,useHistory } from 'react-router-dom';
import {getMealByCategory} from '../Api'
import Loader from '../layout/Loader';
import CatalogList from './CatalogList';
import Search from './Search';


function Home(props) {

    const [catalog,setCatalog] = useState([]);
    const [filteredCatalog,setFilteredCatalog] = useState([]);
    const {pathname,search} = useLocation();
    const {push}  = useSearchParams();

    const handleSearch = (str) =>{
     
        setFilteredCatalog(catalog.filter(item=>item.strCategory.toLowerCase().includes(str.toLowerCase())))
        push({
            pathname,
            search: `?search =${str}`
        })
    }

    useEffect(()=>{
        getMealByCategory().then(data=>{
            setCatalog(data.categories);
            setFilteredCatalog(data.categories);
        })
    },[search])
// Serchni iloji boricha yaxshilash kerak
    return (
        <div>
            <Search cb={handleSearch} />
           {!catalog.length ? (<Loader />):(
               <CatalogList catalog={filteredCatalog}/>
           )}
        </div>
    );
}

export default Home;