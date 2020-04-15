
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Animating from '../src/Animating';

export default {
  title: 'Animating',
  component: Animating,
};

export const Primary = () => <Animating color="primary" />;
export const Secondary = () => <Animating color="secondary" />;
export const Color = () => <Animating color={color('color', '#00FF00')} />;
    