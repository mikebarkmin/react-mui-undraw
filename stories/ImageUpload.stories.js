
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ImageUpload from '../src/ImageUpload';

export default {
  title: 'ImageUpload',
  component: ImageUpload,
};

export const Primary = () => <ImageUpload color="primary" />;
export const Secondary = () => <ImageUpload color="secondary" />;
export const Color = () => <ImageUpload color={color('color', '#00FF00')} />;
    