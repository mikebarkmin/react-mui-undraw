
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CurrentLocation from '../src/CurrentLocation';

export default {
  title: 'CurrentLocation',
  component: CurrentLocation,
};

export const Primary = () => <CurrentLocation color="primary" />;
export const Secondary = () => <CurrentLocation color="secondary" />;
export const Color = () => <CurrentLocation color={color('color', '#00FF00')} />;
    