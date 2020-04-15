
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Destination from '../src/Destination';

export default {
  title: 'Destination',
  component: Destination,
};

export const Primary = () => <Destination color="primary" />;
export const Secondary = () => <Destination color="secondary" />;
export const Color = () => <Destination color={color('color', '#00FF00')} />;
    