
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Discount from '../src/Discount';

export default {
  title: 'Discount',
  component: Discount,
};

export const Primary = () => <Discount color="primary" />;
export const Secondary = () => <Discount color="secondary" />;
export const Color = () => <Discount color={color('color', '#00FF00')} />;
    