
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Playlist from '../src/Playlist';

export default {
  title: 'Playlist',
  component: Playlist,
};

export const Primary = () => <Playlist color="primary" />;
export const Secondary = () => <Playlist color="secondary" />;
export const Color = () => <Playlist color={color('color', '#00FF00')} />;
    