
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Typewriter from '../src/Typewriter';

export default {
  title: 'Typewriter',
  component: Typewriter,
};

export const Primary = () => <Typewriter color="primary" />;
export const Secondary = () => <Typewriter color="secondary" />;
export const Color = () => <Typewriter color={color('color', '#00FF00')} />;
    