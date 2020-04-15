
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GoogleAnalytics from '../src/GoogleAnalytics';

export default {
  title: 'GoogleAnalytics',
  component: GoogleAnalytics,
};

export const Primary = () => <GoogleAnalytics color="primary" />;
export const Secondary = () => <GoogleAnalytics color="secondary" />;
export const Color = () => <GoogleAnalytics color={color('color', '#00FF00')} />;
    