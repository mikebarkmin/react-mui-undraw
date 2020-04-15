
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PressPlay from '../src/PressPlay';

export default {
  title: 'PressPlay',
  component: PressPlay,
};

export const Primary = () => <PressPlay color="primary" />;
export const Secondary = () => <PressPlay color="secondary" />;
export const Color = () => <PressPlay color={color('color', '#00FF00')} />;
    