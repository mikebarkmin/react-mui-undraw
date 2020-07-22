
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DarkMode from '../src/DarkMode';

export default {
  title: 'DarkMode',
  component: DarkMode,
};

export const Primary = () => <DarkMode color="primary" />;
export const Secondary = () => <DarkMode color="secondary" />;
export const Color = () => <DarkMode color={color('color', '#00FF00')} />;
    