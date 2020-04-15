
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Finance from '../src/Finance';

export default {
  title: 'Finance',
  component: Finance,
};

export const Primary = () => <Finance color="primary" />;
export const Secondary = () => <Finance color="secondary" />;
export const Color = () => <Finance color={color('color', '#00FF00')} />;
    