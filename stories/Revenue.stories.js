
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Revenue from '../src/Revenue';

export default {
  title: 'Revenue',
  component: Revenue,
};

export const Primary = () => <Revenue color="primary" />;
export const Secondary = () => <Revenue color="secondary" />;
export const Color = () => <Revenue color={color('color', '#00FF00')} />;
    