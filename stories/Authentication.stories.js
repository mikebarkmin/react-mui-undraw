
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Authentication from '../src/Authentication';

export default {
  title: 'Authentication',
  component: Authentication,
};

export const Primary = () => <Authentication color="primary" />;
export const Secondary = () => <Authentication color="secondary" />;
export const Color = () => <Authentication color={color('color', '#00FF00')} />;
    