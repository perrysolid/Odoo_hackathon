'use client';
import { Link } from 'react-router-dom';
import React from 'react';
import {
  HeroWrapper,
  HeroHeading,
  HeroParagraph,
  HeroButtons,
  ButtonPrimary,
  ButtonSecondary,
} from './HeroStyles';

const Hero: React.FC = () => {
  return (
    <HeroWrapper>
      <HeroHeading>Sustainable Fashion Exchange</HeroHeading>
      <HeroParagraph>
        Give your clothes a second life. Swap, redeem, and reduce textile waste with our community-driven platform.
      </HeroParagraph>
      <HeroButtons>
      <Link to="/register"><ButtonPrimary>Start Swapping</ButtonPrimary></Link>
      <Link to="/browse"><ButtonSecondary>Browse Items</ButtonSecondary></Link>
        <ButtonSecondary>Browse Items</ButtonSecondary>
      </HeroButtons>
    </HeroWrapper>
  );
};

export default Hero;
