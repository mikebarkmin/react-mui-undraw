
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Analytics from '../src/Analytics';

export default {
  title: 'Analytics',
  component: Analytics,
};

export const Primary = () => <Analytics color="primary" />;
export const Secondary = () => <Analytics color="secondary" />;
export const Color = () => <Analytics color={color('color', '#00FF00')} />;
    