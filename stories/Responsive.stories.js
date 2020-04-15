
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Responsive from '../src/Responsive';

export default {
  title: 'Responsive',
  component: Responsive,
};

export const Primary = () => <Responsive color="primary" />;
export const Secondary = () => <Responsive color="secondary" />;
export const Color = () => <Responsive color={color('color', '#00FF00')} />;
    