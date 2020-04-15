
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Selecting from '../src/Selecting';

export default {
  title: 'Selecting',
  component: Selecting,
};

export const Primary = () => <Selecting color="primary" />;
export const Secondary = () => <Selecting color="secondary" />;
export const Color = () => <Selecting color={color('color', '#00FF00')} />;
    