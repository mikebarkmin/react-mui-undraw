
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Multitasking from '../src/Multitasking';

export default {
  title: 'Multitasking',
  component: Multitasking,
};

export const Primary = () => <Multitasking color="primary" />;
export const Secondary = () => <Multitasking color="secondary" />;
export const Color = () => <Multitasking color={color('color', '#00FF00')} />;
    