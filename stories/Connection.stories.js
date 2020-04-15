
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Connection from '../src/Connection';

export default {
  title: 'Connection',
  component: Connection,
};

export const Primary = () => <Connection color="primary" />;
export const Secondary = () => <Connection color="secondary" />;
export const Color = () => <Connection color={color('color', '#00FF00')} />;
    