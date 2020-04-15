
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Fireworks from '../src/Fireworks';

export default {
  title: 'Fireworks',
  component: Fireworks,
};

export const Primary = () => <Fireworks color="primary" />;
export const Secondary = () => <Fireworks color="secondary" />;
export const Color = () => <Fireworks color={color('color', '#00FF00')} />;
    