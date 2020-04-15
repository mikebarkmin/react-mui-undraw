
import React from 'react';
import { color } from '@storybook/addon-knobs';
import VideoCall from '../src/VideoCall';

export default {
  title: 'VideoCall',
  component: VideoCall,
};

export const Primary = () => <VideoCall color="primary" />;
export const Secondary = () => <VideoCall color="secondary" />;
export const Color = () => <VideoCall color={color('color', '#00FF00')} />;
    