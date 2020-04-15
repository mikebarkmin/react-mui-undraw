
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Setup from '../src/Setup';

export default {
  title: 'Setup',
  component: Setup,
};

export const Primary = () => <Setup color="primary" />;
export const Secondary = () => <Setup color="secondary" />;
export const Color = () => <Setup color={color('color', '#00FF00')} />;
    