
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DarkAlley from '../src/DarkAlley';

export default {
  title: 'DarkAlley',
  component: DarkAlley,
};

export const Primary = () => <DarkAlley color="primary" />;
export const Secondary = () => <DarkAlley color="secondary" />;
export const Color = () => <DarkAlley color={color('color', '#00FF00')} />;
    