
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ADayAtThePark from '../src/ADayAtThePark';

export default {
  title: 'ADayAtThePark',
  component: ADayAtThePark,
};

export const Primary = () => <ADayAtThePark color="primary" />;
export const Secondary = () => <ADayAtThePark color="secondary" />;
export const Color = () => <ADayAtThePark color={color('color', '#00FF00')} />;
    