
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PhotoSession from '../src/PhotoSession';

export default {
  title: 'PhotoSession',
  component: PhotoSession,
};

export const Primary = () => <PhotoSession color="primary" />;
export const Secondary = () => <PhotoSession color="secondary" />;
export const Color = () => <PhotoSession color={color('color', '#00FF00')} />;
    