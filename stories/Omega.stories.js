
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Omega from '../src/Omega';

export default {
  title: 'Omega',
  component: Omega,
};

export const Primary = () => <Omega color="primary" />;
export const Secondary = () => <Omega color="secondary" />;
export const Color = () => <Omega color={color('color', '#00FF00')} />;
    