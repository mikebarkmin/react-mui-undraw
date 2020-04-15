
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Contemplating from '../src/Contemplating';

export default {
  title: 'Contemplating',
  component: Contemplating,
};

export const Primary = () => <Contemplating color="primary" />;
export const Secondary = () => <Contemplating color="secondary" />;
export const Color = () => <Contemplating color={color('color', '#00FF00')} />;
    