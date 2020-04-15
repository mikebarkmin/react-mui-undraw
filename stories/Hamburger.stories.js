
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Hamburger from '../src/Hamburger';

export default {
  title: 'Hamburger',
  component: Hamburger,
};

export const Primary = () => <Hamburger color="primary" />;
export const Secondary = () => <Hamburger color="secondary" />;
export const Color = () => <Hamburger color={color('color', '#00FF00')} />;
    