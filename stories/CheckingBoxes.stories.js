
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CheckingBoxes from '../src/CheckingBoxes';

export default {
  title: 'CheckingBoxes',
  component: CheckingBoxes,
};

export const Primary = () => <CheckingBoxes color="primary" />;
export const Secondary = () => <CheckingBoxes color="secondary" />;
export const Color = () => <CheckingBoxes color={color('color', '#00FF00')} />;
    