
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CompleteTask from '../src/CompleteTask';

export default {
  title: 'CompleteTask',
  component: CompleteTask,
};

export const Primary = () => <CompleteTask color="primary" />;
export const Secondary = () => <CompleteTask color="secondary" />;
export const Color = () => <CompleteTask color={color('color', '#00FF00')} />;
    