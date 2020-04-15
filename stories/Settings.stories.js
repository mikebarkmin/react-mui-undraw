
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Settings from '../src/Settings';

export default {
  title: 'Settings',
  component: Settings,
};

export const Primary = () => <Settings color="primary" />;
export const Secondary = () => <Settings color="secondary" />;
export const Color = () => <Settings color={color('color', '#00FF00')} />;
    