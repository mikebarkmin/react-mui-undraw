
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AcceptTasks from '../src/AcceptTasks';

export default {
  title: 'AcceptTasks',
  component: AcceptTasks,
};

export const Primary = () => <AcceptTasks color="primary" />;
export const Secondary = () => <AcceptTasks color="secondary" />;
export const Color = () => <AcceptTasks color={color('color', '#00FF00')} />;
    