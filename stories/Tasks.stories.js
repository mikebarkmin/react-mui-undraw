
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Tasks from '../src/Tasks';

export default {
  title: 'Tasks',
  component: Tasks,
};

export const Primary = () => <Tasks color="primary" />;
export const Secondary = () => <Tasks color="secondary" />;
export const Color = () => <Tasks color={color('color', '#00FF00')} />;
    