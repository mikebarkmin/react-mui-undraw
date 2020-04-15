
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Searching from '../src/Searching';

export default {
  title: 'Searching',
  component: Searching,
};

export const Primary = () => <Searching color="primary" />;
export const Secondary = () => <Searching color="secondary" />;
export const Color = () => <Searching color={color('color', '#00FF00')} />;
    