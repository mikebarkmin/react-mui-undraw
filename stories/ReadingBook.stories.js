
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ReadingBook from '../src/ReadingBook';

export default {
  title: 'ReadingBook',
  component: ReadingBook,
};

export const Primary = () => <ReadingBook color="primary" />;
export const Secondary = () => <ReadingBook color="secondary" />;
export const Color = () => <ReadingBook color={color('color', '#00FF00')} />;
    