
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Startled from '../src/Startled';

export default {
  title: 'Startled',
  component: Startled,
};

export const Primary = () => <Startled color="primary" />;
export const Secondary = () => <Startled color="secondary" />;
export const Color = () => <Startled color={color('color', '#00FF00')} />;
    