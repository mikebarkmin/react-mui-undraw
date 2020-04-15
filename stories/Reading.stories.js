
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Reading from '../src/Reading';

export default {
  title: 'Reading',
  component: Reading,
};

export const Primary = () => <Reading color="primary" />;
export const Secondary = () => <Reading color="secondary" />;
export const Color = () => <Reading color={color('color', '#00FF00')} />;
    