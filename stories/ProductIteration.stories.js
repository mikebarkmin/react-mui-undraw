
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ProductIteration from '../src/ProductIteration';

export default {
  title: 'ProductIteration',
  component: ProductIteration,
};

export const Primary = () => <ProductIteration color="primary" />;
export const Secondary = () => <ProductIteration color="secondary" />;
export const Color = () => <ProductIteration color={color('color', '#00FF00')} />;
    