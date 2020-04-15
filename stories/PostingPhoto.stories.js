
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PostingPhoto from '../src/PostingPhoto';

export default {
  title: 'PostingPhoto',
  component: PostingPhoto,
};

export const Primary = () => <PostingPhoto color="primary" />;
export const Secondary = () => <PostingPhoto color="secondary" />;
export const Color = () => <PostingPhoto color={color('color', '#00FF00')} />;
    