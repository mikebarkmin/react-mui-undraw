
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Books from '../src/Books';

export default {
  title: 'Books',
  component: Books,
};

export const Primary = () => <Books color="primary" />;
export const Secondary = () => <Books color="secondary" />;
export const Color = () => <Books color={color('color', '#00FF00')} />;
    