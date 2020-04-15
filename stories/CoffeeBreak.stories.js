
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CoffeeBreak from '../src/CoffeeBreak';

export default {
  title: 'CoffeeBreak',
  component: CoffeeBreak,
};

export const Primary = () => <CoffeeBreak color="primary" />;
export const Secondary = () => <CoffeeBreak color="secondary" />;
export const Color = () => <CoffeeBreak color={color('color', '#00FF00')} />;
    