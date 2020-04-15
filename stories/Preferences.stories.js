
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Preferences from '../src/Preferences';

export default {
  title: 'Preferences',
  component: Preferences,
};

export const Primary = () => <Preferences color="primary" />;
export const Secondary = () => <Preferences color="secondary" />;
export const Color = () => <Preferences color={color('color', '#00FF00')} />;
    