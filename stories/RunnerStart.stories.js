
import React from 'react';
import { color } from '@storybook/addon-knobs';
import RunnerStart from '../src/RunnerStart';

export default {
  title: 'RunnerStart',
  component: RunnerStart,
};

export const Primary = () => <RunnerStart color="primary" />;
export const Secondary = () => <RunnerStart color="secondary" />;
export const Color = () => <RunnerStart color={color('color', '#00FF00')} />;
    