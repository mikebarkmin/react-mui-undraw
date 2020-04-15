
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ProductTour from '../src/ProductTour';

export default {
  title: 'ProductTour',
  component: ProductTour,
};

export const Primary = () => <ProductTour color="primary" />;
export const Secondary = () => <ProductTour color="secondary" />;
export const Color = () => <ProductTour color={color('color', '#00FF00')} />;
    