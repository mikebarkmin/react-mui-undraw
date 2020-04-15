
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WebBrowsing from '../src/WebBrowsing';

export default {
  title: 'WebBrowsing',
  component: WebBrowsing,
};

export const Primary = () => <WebBrowsing color="primary" />;
export const Secondary = () => <WebBrowsing color="secondary" />;
export const Color = () => <WebBrowsing color={color('color', '#00FF00')} />;
    