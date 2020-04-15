
import React from 'react';
import { color } from '@storybook/addon-knobs';
import VideoStreaming from '../src/VideoStreaming';

export default {
  title: 'VideoStreaming',
  component: VideoStreaming,
};

export const Primary = () => <VideoStreaming color="primary" />;
export const Secondary = () => <VideoStreaming color="secondary" />;
export const Color = () => <VideoStreaming color={color('color', '#00FF00')} />;
    