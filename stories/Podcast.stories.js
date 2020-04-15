
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Podcast from '../src/Podcast';

export default {
  title: 'Podcast',
  component: Podcast,
};

export const Primary = () => <Podcast color="primary" />;
export const Secondary = () => <Podcast color="secondary" />;
export const Color = () => <Podcast color={color('color', '#00FF00')} />;
    