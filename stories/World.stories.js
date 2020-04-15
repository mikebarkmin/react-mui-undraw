
import React from 'react';
import { color } from '@storybook/addon-knobs';
import World from '../src/World';

export default {
  title: 'World',
  component: World,
};

export const Primary = () => <World color="primary" />;
export const Secondary = () => <World color="secondary" />;
export const Color = () => <World color={color('color', '#00FF00')} />;
    