import React from 'react';
import { Link } from "react-router-dom";
import Recipes from '../Recipes/Recipes';
import { ToastContainer, toast } from 'react-toastify';

const Chef = ({ chef }) => {
    const notify = () => toast("Wow so easy!");  
    // const chefsData = useLoaderData();
    // const paramsData = useParams();
    // console.log(chefsData);
    // console.log(paramsData)
    // console.log(props);
    const { id, picture, name, experience, likes, recipes } = chef;
    // const { recipes} = props.chef.recipes;
    // console.log(picture);
    // console.log();
    const handleRecipes = (id) => {
        // console.log(id);
    }

    return (
        <div>
        <div className="card w-96 bg-base-100 h-5/6 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl img-fluid" />
            </figure>
            <div className="card-body items-center text-center">
                {/* <h1>{id}</h1> */}
                <h2 className="card-title">{name}</h2>
                <div className='flex gap-14'>
                    <p>Experience :{experience}</p>
                    <p>Likes :{likes}</p>
                </div>
                <p>Recipes :{recipes.length}</p>
                <div className="card-actions">
                    <Link to={`/chefs/${id}`} className="btn btn-primary" >View Recipes</Link>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Chef;