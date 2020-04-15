
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WorkingLate from '../src/WorkingLate';

export default {
  title: 'WorkingLate',
  component: WorkingLate,
};

export const Primary = () => <WorkingLate color="primary" />;
export const Secondary = () => <WorkingLate color="secondary" />;
export const Color = () => <WorkingLate color={color('color', '#00FF00')} />;
    