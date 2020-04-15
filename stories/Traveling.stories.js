
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Traveling from '../src/Traveling';

export default {
  title: 'Traveling',
  component: Traveling,
};

export const Primary = () => <Traveling color="primary" />;
export const Secondary = () => <Traveling color="secondary" />;
export const Color = () => <Traveling color={color('color', '#00FF00')} />;
    