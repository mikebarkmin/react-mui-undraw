
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ToDo from '../src/ToDo';

export default {
  title: 'ToDo',
  component: ToDo,
};

export const Primary = () => <ToDo color="primary" />;
export const Secondary = () => <ToDo color="secondary" />;
export const Color = () => <ToDo color={color('color', '#00FF00')} />;
    