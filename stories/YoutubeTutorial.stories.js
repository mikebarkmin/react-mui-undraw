
import React from 'react';
import { color } from '@storybook/addon-knobs';
import YoutubeTutorial from '../src/YoutubeTutorial';

export default {
  title: 'YoutubeTutorial',
  component: YoutubeTutorial,
};

export const Primary = () => <YoutubeTutorial color="primary" />;
export const Secondary = () => <YoutubeTutorial color="secondary" />;
export const Color = () => <YoutubeTutorial color={color('color', '#00FF00')} />;
    