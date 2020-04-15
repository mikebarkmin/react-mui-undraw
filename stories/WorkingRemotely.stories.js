
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WorkingRemotely from '../src/WorkingRemotely';

export default {
  title: 'WorkingRemotely',
  component: WorkingRemotely,
};

export const Primary = () => <WorkingRemotely color="primary" />;
export const Secondary = () => <WorkingRemotely color="secondary" />;
export const Color = () => <WorkingRemotely color={color('color', '#00FF00')} />;
    