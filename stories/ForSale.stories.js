
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ForSale from '../src/ForSale';

export default {
  title: 'ForSale',
  component: ForSale,
};

export const Primary = () => <ForSale color="primary" />;
export const Secondary = () => <ForSale color="secondary" />;
export const Color = () => <ForSale color={color('color', '#00FF00')} />;
    