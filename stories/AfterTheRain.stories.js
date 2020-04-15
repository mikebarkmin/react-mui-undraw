
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AfterTheRain from '../src/AfterTheRain';

export default {
  title: 'AfterTheRain',
  component: AfterTheRain,
};

export const Primary = () => <AfterTheRain color="primary" />;
export const Secondary = () => <AfterTheRain color="secondary" />;
export const Color = () => <AfterTheRain color={color('color', '#00FF00')} />;
    