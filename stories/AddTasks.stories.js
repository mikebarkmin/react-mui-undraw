
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AddTasks from '../src/AddTasks';

export default {
  title: 'AddTasks',
  component: AddTasks,
};

export const Primary = () => <AddTasks color="primary" />;
export const Secondary = () => <AddTasks color="secondary" />;
export const Color = () => <AddTasks color={color('color', '#00FF00')} />;
    