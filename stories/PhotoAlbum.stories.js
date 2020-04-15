
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PhotoAlbum from '../src/PhotoAlbum';

export default {
  title: 'PhotoAlbum',
  component: PhotoAlbum,
};

export const Primary = () => <PhotoAlbum color="primary" />;
export const Secondary = () => <PhotoAlbum color="secondary" />;
export const Color = () => <PhotoAlbum color={color('color', '#00FF00')} />;
    