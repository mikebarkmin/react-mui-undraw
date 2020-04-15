
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CircuitBoard from '../src/CircuitBoard';

export default {
  title: 'CircuitBoard',
  component: CircuitBoard,
};

export const Primary = () => <CircuitBoard color="primary" />;
export const Secondary = () => <CircuitBoard color="secondary" />;
export const Color = () => <CircuitBoard color={color('color', '#00FF00')} />;
    