const addToLocalStorage = id => {
    let savedRecipe = [];
    const recipeStore = localStorage.getItem('recipeStore');
    if(recipeStore){
        savedRecipe = JSON.parse(recipeStore);
        if(savedRecipe.includes(id)){
            return 0;
        }
        savedRecipe.push(id);
        localStorage.setItem('recipeStore', JSON.stringify(savedRecipe));

    }
    else{
        savedRecipe.push(id);
        localStorage.setItem('recipeStore', JSON.stringify(savedRecipe));
    }
    
}

const getFromLocalStorage = () => {
    let savedRecipe = [];
    const recipeStore = localStorage.getItem('recipeStore');
    if(recipeStore){
        savedRecipe = JSON.parse(recipeStore);
        return savedRecipe;
    }
    else{
        return 0;
    }
}

export {addToLocalStorage, getFromLocalStorage};