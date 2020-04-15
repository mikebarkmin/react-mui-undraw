
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MapLight from '../src/MapLight';

export default {
  title: 'MapLight',
  component: MapLight,
};

export const Primary = () => <MapLight color="primary" />;
export const Secondary = () => <MapLight color="secondary" />;
export const Color = () => <MapLight color={color('color', '#00FF00')} />;
    