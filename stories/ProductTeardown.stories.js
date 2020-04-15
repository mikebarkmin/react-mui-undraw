
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ProductTeardown from '../src/ProductTeardown';

export default {
  title: 'ProductTeardown',
  component: ProductTeardown,
};

export const Primary = () => <ProductTeardown color="primary" />;
export const Secondary = () => <ProductTeardown color="secondary" />;
export const Color = () => <ProductTeardown color={color('color', '#00FF00')} />;
    