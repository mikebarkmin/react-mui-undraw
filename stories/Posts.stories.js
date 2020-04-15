
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Posts from '../src/Posts';

export default {
  title: 'Posts',
  component: Posts,
};

export const Primary = () => <Posts color="primary" />;
export const Secondary = () => <Posts color="secondary" />;
export const Color = () => <Posts color={color('color', '#00FF00')} />;
    