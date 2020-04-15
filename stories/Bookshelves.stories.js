
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Bookshelves from '../src/Bookshelves';

export default {
  title: 'Bookshelves',
  component: Bookshelves,
};

export const Primary = () => <Bookshelves color="primary" />;
export const Secondary = () => <Bookshelves color="secondary" />;
export const Color = () => <Bookshelves color={color('color', '#00FF00')} />;
    