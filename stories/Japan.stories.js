
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Japan from '../src/Japan';

export default {
  title: 'Japan',
  component: Japan,
};

export const Primary = () => <Japan color="primary" />;
export const Secondary = () => <Japan color="secondary" />;
export const Color = () => <Japan color={color('color', '#00FF00')} />;
    