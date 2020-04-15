
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CloudHosting from '../src/CloudHosting';

export default {
  title: 'CloudHosting',
  component: CloudHosting,
};

export const Primary = () => <CloudHosting color="primary" />;
export const Secondary = () => <CloudHosting color="secondary" />;
export const Color = () => <CloudHosting color={color('color', '#00FF00')} />;
    