
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GrowthAnalytics from '../src/GrowthAnalytics';

export default {
  title: 'GrowthAnalytics',
  component: GrowthAnalytics,
};

export const Primary = () => <GrowthAnalytics color="primary" />;
export const Secondary = () => <GrowthAnalytics color="secondary" />;
export const Color = () => <GrowthAnalytics color={color('color', '#00FF00')} />;
    