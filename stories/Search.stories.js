
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Search from '../src/Search';

export default {
  title: 'Search',
  component: Search,
};

export const Primary = () => <Search color="primary" />;
export const Secondary = () => <Search color="secondary" />;
export const Color = () => <Search color={color('color', '#00FF00')} />;
    