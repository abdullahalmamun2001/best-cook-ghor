import React from 'react';
import {useLoaderData} from "react-router-dom";
import Recipe from '../Recipe/Recipe';

const Recipes = () => {

    const data=useLoaderData();
    const {recipes}=data;
    console.log(data);
    if(!data){
        return <h1></h1>
    }
    
    
    
    return (
        <div>
            {
                recipes.map(recipe=> <Recipe key={recipe.id}
                recipe={recipe}></Recipe>)
            }
        </div>
    );
};

export default Recipes;