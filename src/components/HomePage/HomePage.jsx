import React from 'react';
import FoodBanner from '../FoodBanner/FoodBanner';
import ChefContainer from '../ChefContainer/ChefContainer';
import UserReview from '../UserReview/UserReview';
import Satisfiction from '../Satisfiction/Satisfiction';
import FoodGallary from '../FoodGallary/FoodGallary';
import ChefRecipi from '../ChefRecipi/ChefRecipi';
import { Slide } from 'react-awesome-reveal';

const HomePage = () => {
    return (
        <div>
            <FoodBanner></FoodBanner>
            <ChefContainer></ChefContainer>
            
            <Slide direction='right' duration={1000}>
            <UserReview></UserReview>
            </Slide>

            <Slide direction='left' duration={1000}>
            <Satisfiction></Satisfiction>
            </Slide>

            <Slide direction='right' duration={1000}>
            <FoodGallary></FoodGallary>
            </Slide>
            
            
            
        </div>
    );
};

export default HomePage;