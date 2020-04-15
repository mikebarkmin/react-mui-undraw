
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ImagePost from '../src/ImagePost';

export default {
  title: 'ImagePost',
  component: ImagePost,
};

export const Primary = () => <ImagePost color="primary" />;
export const Secondary = () => <ImagePost color="secondary" />;
export const Color = () => <ImagePost color={color('color', '#00FF00')} />;
    