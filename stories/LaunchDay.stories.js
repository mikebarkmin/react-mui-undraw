
import React from 'react';
import { color } from '@storybook/addon-knobs';
import LaunchDay from '../src/LaunchDay';

export default {
  title: 'LaunchDay',
  component: LaunchDay,
};

export const Primary = () => <LaunchDay color="primary" />;
export const Secondary = () => <LaunchDay color="secondary" />;
export const Color = () => <LaunchDay color={color('color', '#00FF00')} />;
    