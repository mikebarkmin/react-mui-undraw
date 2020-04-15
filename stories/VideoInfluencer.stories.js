
import React from 'react';
import { color } from '@storybook/addon-knobs';
import VideoInfluencer from '../src/VideoInfluencer';

export default {
  title: 'VideoInfluencer',
  component: VideoInfluencer,
};

export const Primary = () => <VideoInfluencer color="primary" />;
export const Secondary = () => <VideoInfluencer color="secondary" />;
export const Color = () => <VideoInfluencer color={color('color', '#00FF00')} />;
    