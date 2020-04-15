
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Android from '../src/Android';

export default {
  title: 'Android',
  component: Android,
};

export const Primary = () => <Android color="primary" />;
export const Secondary = () => <Android color="secondary" />;
export const Color = () => <Android color={color('color', '#00FF00')} />;
    