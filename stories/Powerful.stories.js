
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Powerful from '../src/Powerful';

export default {
  title: 'Powerful',
  component: Powerful,
};

export const Primary = () => <Powerful color="primary" />;
export const Secondary = () => <Powerful color="secondary" />;
export const Color = () => <Powerful color={color('color', '#00FF00')} />;
    