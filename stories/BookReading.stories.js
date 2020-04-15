
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BookReading from '../src/BookReading';

export default {
  title: 'BookReading',
  component: BookReading,
};

export const Primary = () => <BookReading color="primary" />;
export const Secondary = () => <BookReading color="secondary" />;
export const Color = () => <BookReading color={color('color', '#00FF00')} />;
    