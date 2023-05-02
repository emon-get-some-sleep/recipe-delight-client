import React from 'react';
import FoodBanner from '../FoodBanner/FoodBanner';
import ChefContainer from '../ChefContainer/ChefContainer';
import UserReview from '../UserReview/UserReview';
import Satisfiction from '../Satisfiction/Satisfiction';

const HomePage = () => {
    return (
        <div>
            <FoodBanner></FoodBanner>
            <ChefContainer></ChefContainer>
            <UserReview></UserReview>
            <Satisfiction></Satisfiction>
        </div>
    );
};

export default HomePage;