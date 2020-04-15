
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Gift from '../src/Gift';

export default {
  title: 'Gift',
  component: Gift,
};

export const Primary = () => <Gift color="primary" />;
export const Secondary = () => <Gift color="secondary" />;
export const Color = () => <Gift color={color('color', '#00FF00')} />;
    