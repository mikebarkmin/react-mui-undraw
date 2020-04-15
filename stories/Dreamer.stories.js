
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Dreamer from '../src/Dreamer';

export default {
  title: 'Dreamer',
  component: Dreamer,
};

export const Primary = () => <Dreamer color="primary" />;
export const Secondary = () => <Dreamer color="secondary" />;
export const Color = () => <Dreamer color={color('color', '#00FF00')} />;
    