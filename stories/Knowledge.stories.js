
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Knowledge from '../src/Knowledge';

export default {
  title: 'Knowledge',
  component: Knowledge,
};

export const Primary = () => <Knowledge color="primary" />;
export const Secondary = () => <Knowledge color="secondary" />;
export const Color = () => <Knowledge color={color('color', '#00FF00')} />;
    