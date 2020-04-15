
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WeatherNotification from '../src/WeatherNotification';

export default {
  title: 'WeatherNotification',
  component: WeatherNotification,
};

export const Primary = () => <WeatherNotification color="primary" />;
export const Secondary = () => <WeatherNotification color="secondary" />;
export const Color = () => <WeatherNotification color={color('color', '#00FF00')} />;
    