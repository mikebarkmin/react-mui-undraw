
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Focus from '../src/Focus';

export default {
  title: 'Focus',
  component: Focus,
};

export const Primary = () => <Focus color="primary" />;
export const Secondary = () => <Focus color="secondary" />;
export const Color = () => <Focus color={color('color', '#00FF00')} />;
    