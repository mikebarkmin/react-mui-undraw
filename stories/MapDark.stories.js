
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MapDark from '../src/MapDark';

export default {
  title: 'MapDark',
  component: MapDark,
};

export const Primary = () => <MapDark color="primary" />;
export const Secondary = () => <MapDark color="secondary" />;
export const Color = () => <MapDark color={color('color', '#00FF00')} />;
    