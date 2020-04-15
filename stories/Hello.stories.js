
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Hello from '../src/Hello';

export default {
  title: 'Hello',
  component: Hello,
};

export const Primary = () => <Hello color="primary" />;
export const Secondary = () => <Hello color="secondary" />;
export const Color = () => <Hello color={color('color', '#00FF00')} />;
    