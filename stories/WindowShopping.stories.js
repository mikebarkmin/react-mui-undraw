
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WindowShopping from '../src/WindowShopping';

export default {
  title: 'WindowShopping',
  component: WindowShopping,
};

export const Primary = () => <WindowShopping color="primary" />;
export const Secondary = () => <WindowShopping color="secondary" />;
export const Color = () => <WindowShopping color={color('color', '#00FF00')} />;
    