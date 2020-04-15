
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TravelMode from '../src/TravelMode';

export default {
  title: 'TravelMode',
  component: TravelMode,
};

export const Primary = () => <TravelMode color="primary" />;
export const Secondary = () => <TravelMode color="secondary" />;
export const Color = () => <TravelMode color={color('color', '#00FF00')} />;
    