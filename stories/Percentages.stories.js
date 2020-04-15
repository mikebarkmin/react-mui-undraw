
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Percentages from '../src/Percentages';

export default {
  title: 'Percentages',
  component: Percentages,
};

export const Primary = () => <Percentages color="primary" />;
export const Secondary = () => <Percentages color="secondary" />;
export const Color = () => <Percentages color={color('color', '#00FF00')} />;
    