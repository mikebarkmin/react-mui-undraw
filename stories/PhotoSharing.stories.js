
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PhotoSharing from '../src/PhotoSharing';

export default {
  title: 'PhotoSharing',
  component: PhotoSharing,
};

export const Primary = () => <PhotoSharing color="primary" />;
export const Secondary = () => <PhotoSharing color="secondary" />;
export const Color = () => <PhotoSharing color={color('color', '#00FF00')} />;
    