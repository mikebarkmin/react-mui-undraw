
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WatchApplication from '../src/WatchApplication';

export default {
  title: 'WatchApplication',
  component: WatchApplication,
};

export const Primary = () => <WatchApplication color="primary" />;
export const Secondary = () => <WatchApplication color="secondary" />;
export const Color = () => <WatchApplication color={color('color', '#00FF00')} />;
    