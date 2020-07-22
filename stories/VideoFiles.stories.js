
import React from 'react';
import { color } from '@storybook/addon-knobs';
import VideoFiles from '../src/VideoFiles';

export default {
  title: 'VideoFiles',
  component: VideoFiles,
};

export const Primary = () => <VideoFiles color="primary" />;
export const Secondary = () => <VideoFiles color="secondary" />;
export const Color = () => <VideoFiles color={color('color', '#00FF00')} />;
    