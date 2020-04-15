
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ServerDown from '../src/ServerDown';

export default {
  title: 'ServerDown',
  component: ServerDown,
};

export const Primary = () => <ServerDown color="primary" />;
export const Secondary = () => <ServerDown color="secondary" />;
export const Color = () => <ServerDown color={color('color', '#00FF00')} />;
    