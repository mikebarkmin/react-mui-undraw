
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Refreshing from '../src/Refreshing';

export default {
  title: 'Refreshing',
  component: Refreshing,
};

export const Primary = () => <Refreshing color="primary" />;
export const Secondary = () => <Refreshing color="secondary" />;
export const Color = () => <Refreshing color={color('color', '#00FF00')} />;
    