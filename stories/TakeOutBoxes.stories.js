
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TakeOutBoxes from '../src/TakeOutBoxes';

export default {
  title: 'TakeOutBoxes',
  component: TakeOutBoxes,
};

export const Primary = () => <TakeOutBoxes color="primary" />;
export const Secondary = () => <TakeOutBoxes color="secondary" />;
export const Color = () => <TakeOutBoxes color={color('color', '#00FF00')} />;
    