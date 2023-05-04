import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getFromLocalStorage } from '../../utilities/localstorage';
import RecipeDetail from '../RecipeDetail/RecipeDetail';

const MyRecipe = () => {
    const fromFavorite = true;
    const savedRecipe = getFromLocalStorage();
    // console.log(savedRecipe);
    const chefs = useLoaderData();
    // console.log(chefs.chefs);
    const ultimateContainer = [];
    // console.log(ultimateContainer);
    useEffect(() => {
        console.log(ultimateContainer);
    }, [ultimateContainer])
    return (
        <div>

            {
                savedRecipe ?
                savedRecipe.map(each => {
                    chefs.chefs.map(chef => {
                        chef.recipes.map(c => {
                            // if(c.recepi_id == '2'){
                            //     ultimateContainer.push(c)
                            // }
                            // if(c.recipe_id == '2'){
                            //     ultimateContainer.push(c)
                            // }
                            if(c.recipe_id == each || c.recepi_id == each){
                                ultimateContainer.push(c);
                                return;
                            }
                        })
                    })
                })
                :
                <div className='flex items-center justify-center mt-[100px]'><h1 className='text-[54px] font-bold'>No Recipe Yet</h1></div>
            }
            {
                
                    ultimateContainer.map((recipe, index) => <RecipeDetail showFavorite={true} key={index} recipe={recipe}></RecipeDetail>)
                  
            }
         
        </div>
    );
};

export default MyRecipe;