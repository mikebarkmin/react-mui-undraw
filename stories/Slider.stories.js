
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Slider from '../src/Slider';

export default {
  title: 'Slider',
  component: Slider,
};

export const Primary = () => <Slider color="primary" />;
export const Secondary = () => <Slider color="secondary" />;
export const Color = () => <Slider color={color('color', '#00FF00')} />;
    