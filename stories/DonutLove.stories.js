
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DonutLove from '../src/DonutLove';

export default {
  title: 'DonutLove',
  component: DonutLove,
};

export const Primary = () => <DonutLove color="primary" />;
export const Secondary = () => <DonutLove color="secondary" />;
export const Color = () => <DonutLove color={color('color', '#00FF00')} />;
    