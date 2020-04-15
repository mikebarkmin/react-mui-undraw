
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Goal from '../src/Goal';

export default {
  title: 'Goal',
  component: Goal,
};

export const Primary = () => <Goal color="primary" />;
export const Secondary = () => <Goal color="secondary" />;
export const Color = () => <Goal color={color('color', '#00FF00')} />;
    