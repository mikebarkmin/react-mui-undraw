
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HangOut from '../src/HangOut';

export default {
  title: 'HangOut',
  component: HangOut,
};

export const Primary = () => <HangOut color="primary" />;
export const Secondary = () => <HangOut color="secondary" />;
export const Color = () => <HangOut color={color('color', '#00FF00')} />;
    