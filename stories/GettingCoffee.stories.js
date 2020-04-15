
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GettingCoffee from '../src/GettingCoffee';

export default {
  title: 'GettingCoffee',
  component: GettingCoffee,
};

export const Primary = () => <GettingCoffee color="primary" />;
export const Secondary = () => <GettingCoffee color="secondary" />;
export const Color = () => <GettingCoffee color={color('color', '#00FF00')} />;
    