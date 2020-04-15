
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Winners from '../src/Winners';

export default {
  title: 'Winners',
  component: Winners,
};

export const Primary = () => <Winners color="primary" />;
export const Secondary = () => <Winners color="secondary" />;
export const Color = () => <Winners color={color('color', '#00FF00')} />;
    