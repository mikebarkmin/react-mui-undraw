
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Contrast from '../src/Contrast';

export default {
  title: 'Contrast',
  component: Contrast,
};

export const Primary = () => <Contrast color="primary" />;
export const Secondary = () => <Contrast color="secondary" />;
export const Color = () => <Contrast color={color('color', '#00FF00')} />;
    