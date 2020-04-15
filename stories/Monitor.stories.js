
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Monitor from '../src/Monitor';

export default {
  title: 'Monitor',
  component: Monitor,
};

export const Primary = () => <Monitor color="primary" />;
export const Secondary = () => <Monitor color="secondary" />;
export const Color = () => <Monitor color={color('color', '#00FF00')} />;
    