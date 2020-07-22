
import React from 'react';
import { color } from '@storybook/addon-knobs';
import VideoUpload from '../src/VideoUpload';

export default {
  title: 'VideoUpload',
  component: VideoUpload,
};

export const Primary = () => <VideoUpload color="primary" />;
export const Secondary = () => <VideoUpload color="secondary" />;
export const Color = () => <VideoUpload color={color('color', '#00FF00')} />;
    