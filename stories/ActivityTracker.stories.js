
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ActivityTracker from '../src/ActivityTracker';

export default {
  title: 'ActivityTracker',
  component: ActivityTracker,
};

export const Primary = () => <ActivityTracker color="primary" />;
export const Secondary = () => <ActivityTracker color="secondary" />;
export const Color = () => <ActivityTracker color={color('color', '#00FF00')} />;
    