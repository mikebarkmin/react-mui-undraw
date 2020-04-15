
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Friends from '../src/Friends';

export default {
  title: 'Friends',
  component: Friends,
};

export const Primary = () => <Friends color="primary" />;
export const Secondary = () => <Friends color="secondary" />;
export const Color = () => <Friends color={color('color', '#00FF00')} />;
    