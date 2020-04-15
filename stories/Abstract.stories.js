
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Abstract from '../src/Abstract';

export default {
  title: 'Abstract',
  component: Abstract,
};

export const Primary = () => <Abstract color="primary" />;
export const Secondary = () => <Abstract color="secondary" />;
export const Color = () => <Abstract color={color('color', '#00FF00')} />;
    