
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SleepAnalysis from '../src/SleepAnalysis';

export default {
  title: 'SleepAnalysis',
  component: SleepAnalysis,
};

export const Primary = () => <SleepAnalysis color="primary" />;
export const Secondary = () => <SleepAnalysis color="secondary" />;
export const Color = () => <SleepAnalysis color={color('color', '#00FF00')} />;
    