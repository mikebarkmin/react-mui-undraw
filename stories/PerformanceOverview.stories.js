
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PerformanceOverview from '../src/PerformanceOverview';

export default {
  title: 'PerformanceOverview',
  component: PerformanceOverview,
};

export const Primary = () => <PerformanceOverview color="primary" />;
export const Secondary = () => <PerformanceOverview color="secondary" />;
export const Color = () => <PerformanceOverview color={color('color', '#00FF00')} />;
    