
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SortingThoughts from '../src/SortingThoughts';

export default {
  title: 'SortingThoughts',
  component: SortingThoughts,
};

export const Primary = () => <SortingThoughts color="primary" />;
export const Secondary = () => <SortingThoughts color="secondary" />;
export const Color = () => <SortingThoughts color={color('color', '#00FF00')} />;
    