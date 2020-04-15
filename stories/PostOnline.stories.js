
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PostOnline from '../src/PostOnline';

export default {
  title: 'PostOnline',
  component: PostOnline,
};

export const Primary = () => <PostOnline color="primary" />;
export const Secondary = () => <PostOnline color="secondary" />;
export const Color = () => <PostOnline color={color('color', '#00FF00')} />;
    