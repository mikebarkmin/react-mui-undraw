
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WeatherApp from '../src/WeatherApp';

export default {
  title: 'WeatherApp',
  component: WeatherApp,
};

export const Primary = () => <WeatherApp color="primary" />;
export const Secondary = () => <WeatherApp color="secondary" />;
export const Color = () => <WeatherApp color={color('color', '#00FF00')} />;
    