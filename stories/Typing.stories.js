
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Typing from '../src/Typing';

export default {
  title: 'Typing',
  component: Typing,
};

export const Primary = () => <Typing color="primary" />;
export const Secondary = () => <Typing color="secondary" />;
export const Color = () => <Typing color={color('color', '#00FF00')} />;
    