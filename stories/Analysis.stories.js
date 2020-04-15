
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Analysis from '../src/Analysis';

export default {
  title: 'Analysis',
  component: Analysis,
};

export const Primary = () => <Analysis color="primary" />;
export const Secondary = () => <Analysis color="secondary" />;
export const Color = () => <Analysis color={color('color', '#00FF00')} />;
    