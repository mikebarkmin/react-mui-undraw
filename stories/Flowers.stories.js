
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Flowers from '../src/Flowers';

export default {
  title: 'Flowers',
  component: Flowers,
};

export const Primary = () => <Flowers color="primary" />;
export const Secondary = () => <Flowers color="secondary" />;
export const Color = () => <Flowers color={color('color', '#00FF00')} />;
    