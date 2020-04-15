
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Shopping from '../src/Shopping';

export default {
  title: 'Shopping',
  component: Shopping,
};

export const Primary = () => <Shopping color="primary" />;
export const Secondary = () => <Shopping color="secondary" />;
export const Color = () => <Shopping color={color('color', '#00FF00')} />;
    