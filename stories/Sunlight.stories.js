
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Sunlight from '../src/Sunlight';

export default {
  title: 'Sunlight',
  component: Sunlight,
};

export const Primary = () => <Sunlight color="primary" />;
export const Secondary = () => <Sunlight color="secondary" />;
export const Color = () => <Sunlight color={color('color', '#00FF00')} />;
    