
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ThrowDown from '../src/ThrowDown';

export default {
  title: 'ThrowDown',
  component: ThrowDown,
};

export const Primary = () => <ThrowDown color="primary" />;
export const Secondary = () => <ThrowDown color="secondary" />;
export const Color = () => <ThrowDown color={color('color', '#00FF00')} />;
    