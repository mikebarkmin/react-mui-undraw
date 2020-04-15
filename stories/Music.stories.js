
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Music from '../src/Music';

export default {
  title: 'Music',
  component: Music,
};

export const Primary = () => <Music color="primary" />;
export const Secondary = () => <Music color="secondary" />;
export const Color = () => <Music color={color('color', '#00FF00')} />;
    