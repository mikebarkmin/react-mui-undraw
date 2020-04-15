
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Breakfast from '../src/Breakfast';

export default {
  title: 'Breakfast',
  component: Breakfast,
};

export const Primary = () => <Breakfast color="primary" />;
export const Secondary = () => <Breakfast color="secondary" />;
export const Color = () => <Breakfast color={color('color', '#00FF00')} />;
    