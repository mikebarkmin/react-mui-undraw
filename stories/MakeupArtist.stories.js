
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MakeupArtist from '../src/MakeupArtist';

export default {
  title: 'MakeupArtist',
  component: MakeupArtist,
};

export const Primary = () => <MakeupArtist color="primary" />;
export const Secondary = () => <MakeupArtist color="secondary" />;
export const Color = () => <MakeupArtist color={color('color', '#00FF00')} />;
    