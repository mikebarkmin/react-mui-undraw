
import React from 'react';
import { color } from '@storybook/addon-knobs';
import JustBrowsing from '../src/JustBrowsing';

export default {
  title: 'JustBrowsing',
  component: JustBrowsing,
};

export const Primary = () => <JustBrowsing color="primary" />;
export const Secondary = () => <JustBrowsing color="secondary" />;
export const Color = () => <JustBrowsing color={color('color', '#00FF00')} />;
    