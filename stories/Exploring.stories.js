
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Exploring from '../src/Exploring';

export default {
  title: 'Exploring',
  component: Exploring,
};

export const Primary = () => <Exploring color="primary" />;
export const Secondary = () => <Exploring color="secondary" />;
export const Color = () => <Exploring color={color('color', '#00FF00')} />;
    