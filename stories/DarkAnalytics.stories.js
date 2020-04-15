
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DarkAnalytics from '../src/DarkAnalytics';

export default {
  title: 'DarkAnalytics',
  component: DarkAnalytics,
};

export const Primary = () => <DarkAnalytics color="primary" />;
export const Secondary = () => <DarkAnalytics color="secondary" />;
export const Color = () => <DarkAnalytics color={color('color', '#00FF00')} />;
    