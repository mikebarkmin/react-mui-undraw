
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Heartbroken from '../src/Heartbroken';

export default {
  title: 'Heartbroken',
  component: Heartbroken,
};

export const Primary = () => <Heartbroken color="primary" />;
export const Secondary = () => <Heartbroken color="secondary" />;
export const Color = () => <Heartbroken color={color('color', '#00FF00')} />;
    