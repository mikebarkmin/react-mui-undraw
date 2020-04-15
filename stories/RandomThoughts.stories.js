
import React from 'react';
import { color } from '@storybook/addon-knobs';
import RandomThoughts from '../src/RandomThoughts';

export default {
  title: 'RandomThoughts',
  component: RandomThoughts,
};

export const Primary = () => <RandomThoughts color="primary" />;
export const Secondary = () => <RandomThoughts color="secondary" />;
export const Color = () => <RandomThoughts color={color('color', '#00FF00')} />;
    