import React from 'react';
import { Link, useLoaderData, useParams } from "react-router-dom";
import Recipes from '../Recipes/Recipes';

const Chef = ({chef}) => {
    const chefsData=useLoaderData();
    const paramsData=useParams();
    // console.log(chefsData);
    // console.log(paramsData)
    // console.log(props);
    const {id,picture,name,experience,likes,recipes} = chef;
    // const { recipes} = props.chef.recipes;
    // console.log(picture);
    // console.log();
    const handleRecipes=(id)=>{
        // console.log(id);
    }

    return (
        <div>
            <h1>THis is a data is loading</h1>
            <div className="card w-96 bg-base-100 h-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture}alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    {/* <h1>{id}</h1> */}
                    <h2 className="card-title">{name}</h2>
                    <p>Experience :{experience}</p>
                    <p>Likes :{likes}</p>
                    <p>Recipes : 3</p>
                    <div className="card-actions">
                        <Link to={`/recipes/${id}`} onClick={()=>handleRecipes(id)} className="btn btn-primary" >Recipes</Link>
                    </div>
                    <div>
                        {
                            recipes.map(recipe=><Recipes 
                                
                            key={recipe.id}
                            recipe={recipe}></Recipes>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;