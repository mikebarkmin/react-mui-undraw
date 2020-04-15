
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ProductPhotography from '../src/ProductPhotography';

export default {
  title: 'ProductPhotography',
  component: ProductPhotography,
};

export const Primary = () => <ProductPhotography color="primary" />;
export const Secondary = () => <ProductPhotography color="secondary" />;
export const Color = () => <ProductPhotography color={color('color', '#00FF00')} />;
    