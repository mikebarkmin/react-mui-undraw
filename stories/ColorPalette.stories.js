
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ColorPalette from '../src/ColorPalette';

export default {
  title: 'ColorPalette',
  component: ColorPalette,
};

export const Primary = () => <ColorPalette color="primary" />;
export const Secondary = () => <ColorPalette color="secondary" />;
export const Color = () => <ColorPalette color={color('color', '#00FF00')} />;
    