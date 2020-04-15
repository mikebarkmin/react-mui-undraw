
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MovingForward from '../src/MovingForward';

export default {
  title: 'MovingForward',
  component: MovingForward,
};

export const Primary = () => <MovingForward color="primary" />;
export const Secondary = () => <MovingForward color="secondary" />;
export const Color = () => <MovingForward color={color('color', '#00FF00')} />;
    