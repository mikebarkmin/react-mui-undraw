
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Bookmarks from '../src/Bookmarks';

export default {
  title: 'Bookmarks',
  component: Bookmarks,
};

export const Primary = () => <Bookmarks color="primary" />;
export const Secondary = () => <Bookmarks color="secondary" />;
export const Color = () => <Bookmarks color={color('color', '#00FF00')} />;
    