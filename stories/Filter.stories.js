
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Filter from '../src/Filter';

export default {
  title: 'Filter',
  component: Filter,
};

export const Primary = () => <Filter color="primary" />;
export const Secondary = () => <Filter color="secondary" />;
export const Color = () => <Filter color={color('color', '#00FF00')} />;
    