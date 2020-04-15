
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Programming from '../src/Programming';

export default {
  title: 'Programming',
  component: Programming,
};

export const Primary = () => <Programming color="primary" />;
export const Secondary = () => <Programming color="secondary" />;
export const Color = () => <Programming color={color('color', '#00FF00')} />;
    