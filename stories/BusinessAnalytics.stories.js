
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BusinessAnalytics from '../src/BusinessAnalytics';

export default {
  title: 'BusinessAnalytics',
  component: BusinessAnalytics,
};

export const Primary = () => <BusinessAnalytics color="primary" />;
export const Secondary = () => <BusinessAnalytics color="secondary" />;
export const Color = () => <BusinessAnalytics color={color('color', '#00FF00')} />;
    