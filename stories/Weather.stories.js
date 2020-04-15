
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Weather from '../src/Weather';

export default {
  title: 'Weather',
  component: Weather,
};

export const Primary = () => <Weather color="primary" />;
export const Secondary = () => <Weather color="secondary" />;
export const Color = () => <Weather color={color('color', '#00FF00')} />;
    