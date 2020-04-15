
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BusStop from '../src/BusStop';

export default {
  title: 'BusStop',
  component: BusStop,
};

export const Primary = () => <BusStop color="primary" />;
export const Secondary = () => <BusStop color="secondary" />;
export const Color = () => <BusStop color={color('color', '#00FF00')} />;
    