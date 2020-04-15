
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MediaPlayer from '../src/MediaPlayer';

export default {
  title: 'MediaPlayer',
  component: MediaPlayer,
};

export const Primary = () => <MediaPlayer color="primary" />;
export const Secondary = () => <MediaPlayer color="secondary" />;
export const Color = () => <MediaPlayer color={color('color', '#00FF00')} />;
    