
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Server from '../src/Server';

export default {
  title: 'Server',
  component: Server,
};

export const Primary = () => <Server color="primary" />;
export const Secondary = () => <Server color="secondary" />;
export const Color = () => <Server color={color('color', '#00FF00')} />;
    