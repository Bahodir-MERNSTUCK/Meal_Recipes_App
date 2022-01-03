import React from 'react';
import { API_URL } from './config';

const  getMealById = async (mealId) =>{
  const reponse = await fetch(API_URL + `lookup.php?i= ` + mealId)
  return await reponse.json()
}

const getMealByCategory = async () =>{
    const response = await fetch(API_URL + `categories.php`)
    return response.json()
}
const getByFilter = async (categoryName)=>{
    const response = await fetch(API_URL + `filter.php?c=` + categoryName)
    return response.json()
}

export  {getMealById,getMealByCategory,getByFilter};