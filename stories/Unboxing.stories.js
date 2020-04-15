
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Unboxing from '../src/Unboxing';

export default {
  title: 'Unboxing',
  component: Unboxing,
};

export const Primary = () => <Unboxing color="primary" />;
export const Secondary = () => <Unboxing color="secondary" />;
export const Color = () => <Unboxing color={color('color', '#00FF00')} />;
    