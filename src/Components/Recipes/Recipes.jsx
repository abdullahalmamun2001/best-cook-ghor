import React from 'react';
import {useLoaderData, useParams,} from "react-router-dom";
import Recipe from '../Recipe/Recipe';

const Recipes = () => {

    const data=useLoaderData();
    if(!data){
        return <h1>Loading</h1>
    }
    // console.log(data);
    const {recipes}=data;
    
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