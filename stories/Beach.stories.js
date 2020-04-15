
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Beach from '../src/Beach';

export default {
  title: 'Beach',
  component: Beach,
};

export const Primary = () => <Beach color="primary" />;
export const Secondary = () => <Beach color="secondary" />;
export const Color = () => <Beach color={color('color', '#00FF00')} />;
    