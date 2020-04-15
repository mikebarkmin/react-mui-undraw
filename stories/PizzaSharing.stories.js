
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PizzaSharing from '../src/PizzaSharing';

export default {
  title: 'PizzaSharing',
  component: PizzaSharing,
};

export const Primary = () => <PizzaSharing color="primary" />;
export const Secondary = () => <PizzaSharing color="secondary" />;
export const Color = () => <PizzaSharing color={color('color', '#00FF00')} />;
    