
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Sculpting from '../src/Sculpting';

export default {
  title: 'Sculpting',
  component: Sculpting,
};

export const Primary = () => <Sculpting color="primary" />;
export const Secondary = () => <Sculpting color="secondary" />;
export const Color = () => <Sculpting color={color('color', '#00FF00')} />;
    