
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ThroughThePark from '../src/ThroughThePark';

export default {
  title: 'ThroughThePark',
  component: ThroughThePark,
};

export const Primary = () => <ThroughThePark color="primary" />;
export const Secondary = () => <ThroughThePark color="secondary" />;
export const Color = () => <ThroughThePark color={color('color', '#00FF00')} />;
    