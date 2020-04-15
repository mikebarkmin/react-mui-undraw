
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ImageFocus from '../src/ImageFocus';

export default {
  title: 'ImageFocus',
  component: ImageFocus,
};

export const Primary = () => <ImageFocus color="primary" />;
export const Secondary = () => <ImageFocus color="secondary" />;
export const Color = () => <ImageFocus color={color('color', '#00FF00')} />;
    