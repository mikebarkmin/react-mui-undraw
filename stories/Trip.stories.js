
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Trip from '../src/Trip';

export default {
  title: 'Trip',
  component: Trip,
};

export const Primary = () => <Trip color="primary" />;
export const Secondary = () => <Trip color="secondary" />;
export const Color = () => <Trip color={color('color', '#00FF00')} />;
    