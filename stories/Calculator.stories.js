
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Calculator from '../src/Calculator';

export default {
  title: 'Calculator',
  component: Calculator,
};

export const Primary = () => <Calculator color="primary" />;
export const Secondary = () => <Calculator color="secondary" />;
export const Color = () => <Calculator color={color('color', '#00FF00')} />;
    