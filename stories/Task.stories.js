
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Task from '../src/Task';

export default {
  title: 'Task',
  component: Task,
};

export const Primary = () => <Task color="primary" />;
export const Secondary = () => <Task color="secondary" />;
export const Color = () => <Task color={color('color', '#00FF00')} />;
    