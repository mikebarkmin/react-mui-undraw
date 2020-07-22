
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ButtonStyle from '../src/ButtonStyle';

export default {
  title: 'ButtonStyle',
  component: ButtonStyle,
};

export const Primary = () => <ButtonStyle color="primary" />;
export const Secondary = () => <ButtonStyle color="secondary" />;
export const Color = () => <ButtonStyle color={color('color', '#00FF00')} />;
    