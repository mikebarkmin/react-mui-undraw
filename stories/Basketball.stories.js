
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Basketball from '../src/Basketball';

export default {
  title: 'Basketball',
  component: Basketball,
};

export const Primary = () => <Basketball color="primary" />;
export const Secondary = () => <Basketball color="secondary" />;
export const Color = () => <Basketball color={color('color', '#00FF00')} />;
    