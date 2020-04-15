
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GoodDoggy from '../src/GoodDoggy';

export default {
  title: 'GoodDoggy',
  component: GoodDoggy,
};

export const Primary = () => <GoodDoggy color="primary" />;
export const Secondary = () => <GoodDoggy color="secondary" />;
export const Color = () => <GoodDoggy color={color('color', '#00FF00')} />;
    