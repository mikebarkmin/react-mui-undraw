
import React from 'react';
import { color } from '@storybook/addon-knobs';
import VideoGameNight from '../src/VideoGameNight';

export default {
  title: 'VideoGameNight',
  component: VideoGameNight,
};

export const Primary = () => <VideoGameNight color="primary" />;
export const Secondary = () => <VideoGameNight color="secondary" />;
export const Color = () => <VideoGameNight color={color('color', '#00FF00')} />;
    