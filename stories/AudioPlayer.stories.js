
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AudioPlayer from '../src/AudioPlayer';

export default {
  title: 'AudioPlayer',
  component: AudioPlayer,
};

export const Primary = () => <AudioPlayer color="primary" />;
export const Secondary = () => <AudioPlayer color="secondary" />;
export const Color = () => <AudioPlayer color={color('color', '#00FF00')} />;
    