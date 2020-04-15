
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BrowserStats from '../src/BrowserStats';

export default {
  title: 'BrowserStats',
  component: BrowserStats,
};

export const Primary = () => <BrowserStats color="primary" />;
export const Secondary = () => <BrowserStats color="secondary" />;
export const Color = () => <BrowserStats color={color('color', '#00FF00')} />;
    