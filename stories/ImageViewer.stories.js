
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ImageViewer from '../src/ImageViewer';

export default {
  title: 'ImageViewer',
  component: ImageViewer,
};

export const Primary = () => <ImageViewer color="primary" />;
export const Secondary = () => <ImageViewer color="secondary" />;
export const Color = () => <ImageViewer color={color('color', '#00FF00')} />;
    