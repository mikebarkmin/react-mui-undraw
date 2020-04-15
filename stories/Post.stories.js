
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Post from '../src/Post';

export default {
  title: 'Post',
  component: Post,
};

export const Primary = () => <Post color="primary" />;
export const Secondary = () => <Post color="secondary" />;
export const Color = () => <Post color={color('color', '#00FF00')} />;
    