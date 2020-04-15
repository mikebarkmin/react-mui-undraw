
import React from 'react';
import { color } from '@storybook/addon-knobs';
import NextTasks from '../src/NextTasks';

export default {
  title: 'NextTasks',
  component: NextTasks,
};

export const Primary = () => <NextTasks color="primary" />;
export const Secondary = () => <NextTasks color="secondary" />;
export const Color = () => <NextTasks color={color('color', '#00FF00')} />;
    