
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Ninja from '../src/Ninja';

export default {
  title: 'Ninja',
  component: Ninja,
};

export const Primary = () => <Ninja color="primary" />;
export const Secondary = () => <Ninja color="secondary" />;
export const Color = () => <Ninja color={color('color', '#00FF00')} />;
    