
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Gravitas from '../src/Gravitas';

export default {
  title: 'Gravitas',
  component: Gravitas,
};

export const Primary = () => <Gravitas color="primary" />;
export const Secondary = () => <Gravitas color="secondary" />;
export const Color = () => <Gravitas color={color('color', '#00FF00')} />;
    