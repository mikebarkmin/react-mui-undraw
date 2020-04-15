
import React from 'react';
import { color } from '@storybook/addon-knobs';
import InProgress from '../src/InProgress';

export default {
  title: 'InProgress',
  component: InProgress,
};

export const Primary = () => <InProgress color="primary" />;
export const Secondary = () => <InProgress color="secondary" />;
export const Color = () => <InProgress color={color('color', '#00FF00')} />;
    