
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BeerCelebration from '../src/BeerCelebration';

export default {
  title: 'BeerCelebration',
  component: BeerCelebration,
};

export const Primary = () => <BeerCelebration color="primary" />;
export const Secondary = () => <BeerCelebration color="secondary" />;
export const Color = () => <BeerCelebration color={color('color', '#00FF00')} />;
    