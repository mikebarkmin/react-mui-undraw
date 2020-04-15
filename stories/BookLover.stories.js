
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BookLover from '../src/BookLover';

export default {
  title: 'BookLover',
  component: BookLover,
};

export const Primary = () => <BookLover color="primary" />;
export const Secondary = () => <BookLover color="secondary" />;
export const Color = () => <BookLover color={color('color', '#00FF00')} />;
    