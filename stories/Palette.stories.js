
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Palette from '../src/Palette';

export default {
  title: 'Palette',
  component: Palette,
};

export const Primary = () => <Palette color="primary" />;
export const Secondary = () => <Palette color="secondary" />;
export const Color = () => <Palette color={color('color', '#00FF00')} />;
    