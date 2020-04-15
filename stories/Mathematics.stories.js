
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Mathematics from '../src/Mathematics';

export default {
  title: 'Mathematics',
  component: Mathematics,
};

export const Primary = () => <Mathematics color="primary" />;
export const Secondary = () => <Mathematics color="secondary" />;
export const Color = () => <Mathematics color={color('color', '#00FF00')} />;
    