
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SetupAnalytics from '../src/SetupAnalytics';

export default {
  title: 'SetupAnalytics',
  component: SetupAnalytics,
};

export const Primary = () => <SetupAnalytics color="primary" />;
export const Secondary = () => <SetupAnalytics color="secondary" />;
export const Color = () => <SetupAnalytics color={color('color', '#00FF00')} />;
    