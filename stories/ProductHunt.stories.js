
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ProductHunt from '../src/ProductHunt';

export default {
  title: 'ProductHunt',
  component: ProductHunt,
};

export const Primary = () => <ProductHunt color="primary" />;
export const Secondary = () => <ProductHunt color="secondary" />;
export const Color = () => <ProductHunt color={color('color', '#00FF00')} />;
    