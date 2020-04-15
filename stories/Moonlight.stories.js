
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Moonlight from '../src/Moonlight';

export default {
  title: 'Moonlight',
  component: Moonlight,
};

export const Primary = () => <Moonlight color="primary" />;
export const Secondary = () => <Moonlight color="secondary" />;
export const Color = () => <Moonlight color={color('color', '#00FF00')} />;
    