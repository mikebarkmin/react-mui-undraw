
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Directions from '../src/Directions';

export default {
  title: 'Directions',
  component: Directions,
};

export const Primary = () => <Directions color="primary" />;
export const Secondary = () => <Directions color="secondary" />;
export const Color = () => <Directions color={color('color', '#00FF00')} />;
    