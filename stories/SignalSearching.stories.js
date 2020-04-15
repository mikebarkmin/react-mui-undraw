
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SignalSearching from '../src/SignalSearching';

export default {
  title: 'SignalSearching',
  component: SignalSearching,
};

export const Primary = () => <SignalSearching color="primary" />;
export const Secondary = () => <SignalSearching color="secondary" />;
export const Color = () => <SignalSearching color={color('color', '#00FF00')} />;
    