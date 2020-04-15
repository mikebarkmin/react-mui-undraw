
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AddToCart from '../src/AddToCart';

export default {
  title: 'AddToCart',
  component: AddToCart,
};

export const Primary = () => <AddToCart color="primary" />;
export const Secondary = () => <AddToCart color="secondary" />;
export const Color = () => <AddToCart color={color('color', '#00FF00')} />;
    