
import React from 'react';
import { color } from '@storybook/addon-knobs';
import QuietTown from '../src/QuietTown';

export default {
  title: 'QuietTown',
  component: QuietTown,
};

export const Primary = () => <QuietTown color="primary" />;
export const Secondary = () => <QuietTown color="secondary" />;
export const Color = () => <QuietTown color={color('color', '#00FF00')} />;
    