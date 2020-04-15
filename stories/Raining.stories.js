
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Raining from '../src/Raining';

export default {
  title: 'Raining',
  component: Raining,
};

export const Primary = () => <Raining color="primary" />;
export const Secondary = () => <Raining color="secondary" />;
export const Color = () => <Raining color={color('color', '#00FF00')} />;
    