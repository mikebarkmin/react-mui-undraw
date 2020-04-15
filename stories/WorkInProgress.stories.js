
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WorkInProgress from '../src/WorkInProgress';

export default {
  title: 'WorkInProgress',
  component: WorkInProgress,
};

export const Primary = () => <WorkInProgress color="primary" />;
export const Secondary = () => <WorkInProgress color="secondary" />;
export const Color = () => <WorkInProgress color={color('color', '#00FF00')} />;
    