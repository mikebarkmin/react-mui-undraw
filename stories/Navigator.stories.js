
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Navigator from '../src/Navigator';

export default {
  title: 'Navigator',
  component: Navigator,
};

export const Primary = () => <Navigator color="primary" />;
export const Secondary = () => <Navigator color="secondary" />;
export const Color = () => <Navigator color={color('color', '#00FF00')} />;
    