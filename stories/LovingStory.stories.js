
import React from 'react';
import { color } from '@storybook/addon-knobs';
import LovingStory from '../src/LovingStory';

export default {
  title: 'LovingStory',
  component: LovingStory,
};

export const Primary = () => <LovingStory color="primary" />;
export const Secondary = () => <LovingStory color="secondary" />;
export const Color = () => <LovingStory color={color('color', '#00FF00')} />;
    