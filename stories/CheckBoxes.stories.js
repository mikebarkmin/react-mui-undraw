
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CheckBoxes from '../src/CheckBoxes';

export default {
  title: 'CheckBoxes',
  component: CheckBoxes,
};

export const Primary = () => <CheckBoxes color="primary" />;
export const Secondary = () => <CheckBoxes color="secondary" />;
export const Color = () => <CheckBoxes color={color('color', '#00FF00')} />;
    