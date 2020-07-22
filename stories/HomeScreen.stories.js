
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HomeScreen from '../src/HomeScreen';

export default {
  title: 'HomeScreen',
  component: HomeScreen,
};

export const Primary = () => <HomeScreen color="primary" />;
export const Secondary = () => <HomeScreen color="secondary" />;
export const Color = () => <HomeScreen color={color('color', '#00FF00')} />;
    