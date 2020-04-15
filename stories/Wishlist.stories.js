
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Wishlist from '../src/Wishlist';

export default {
  title: 'Wishlist',
  component: Wishlist,
};

export const Primary = () => <Wishlist color="primary" />;
export const Secondary = () => <Wishlist color="secondary" />;
export const Color = () => <Wishlist color={color('color', '#00FF00')} />;
    