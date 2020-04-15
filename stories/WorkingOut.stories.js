
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WorkingOut from '../src/WorkingOut';

export default {
  title: 'WorkingOut',
  component: WorkingOut,
};

export const Primary = () => <WorkingOut color="primary" />;
export const Secondary = () => <WorkingOut color="secondary" />;
export const Color = () => <WorkingOut color={color('color', '#00FF00')} />;
    