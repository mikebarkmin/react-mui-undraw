
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Coding from '../src/Coding';

export default {
  title: 'Coding',
  component: Coding,
};

export const Primary = () => <Coding color="primary" />;
export const Secondary = () => <Coding color="secondary" />;
export const Color = () => <Coding color={color('color', '#00FF00')} />;
    