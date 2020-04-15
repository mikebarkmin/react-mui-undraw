
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ToDoList from '../src/ToDoList';

export default {
  title: 'ToDoList',
  component: ToDoList,
};

export const Primary = () => <ToDoList color="primary" />;
export const Secondary = () => <ToDoList color="secondary" />;
export const Color = () => <ToDoList color={color('color', '#00FF00')} />;
    