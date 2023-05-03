import React from 'react';
import FoodBanner from '../FoodBanner/FoodBanner';
import ChefContainer from '../ChefContainer/ChefContainer';
import UserReview from '../UserReview/UserReview';
import Satisfiction from '../Satisfiction/Satisfiction';
import FoodGallary from '../FoodGallary/FoodGallary';
import ChefRecipi from '../ChefRecipi/ChefRecipi';

const HomePage = () => {
    return (
        <div>
            <FoodBanner></FoodBanner>
            <ChefContainer></ChefContainer>
            <UserReview></UserReview>
            <Satisfiction></Satisfiction>
            <FoodGallary></FoodGallary>
            
        </div>
    );
};

export default HomePage;