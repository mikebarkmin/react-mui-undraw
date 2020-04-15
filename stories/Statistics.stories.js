
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Statistics from '../src/Statistics';

export default {
  title: 'Statistics',
  component: Statistics,
};

export const Primary = () => <Statistics color="primary" />;
export const Secondary = () => <Statistics color="secondary" />;
export const Color = () => <Statistics color={color('color', '#00FF00')} />;
    