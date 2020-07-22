
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ShoppingApp from '../src/ShoppingApp';

export default {
  title: 'ShoppingApp',
  component: ShoppingApp,
};

export const Primary = () => <ShoppingApp color="primary" />;
export const Secondary = () => <ShoppingApp color="secondary" />;
export const Color = () => <ShoppingApp color={color('color', '#00FF00')} />;
    