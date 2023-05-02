import React from 'react';
import FoodBanner from '../FoodBanner/FoodBanner';
import ChefContainer from '../ChefContainer/ChefContainer';
import UserReview from '../UserReview/UserReview';

const HomePage = () => {
    return (
        <div>
            <FoodBanner></FoodBanner>
            <ChefContainer></ChefContainer>
            <UserReview></UserReview>
        </div>
    );
};

export default HomePage;