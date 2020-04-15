
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ViralTweet from '../src/ViralTweet';

export default {
  title: 'ViralTweet',
  component: ViralTweet,
};

export const Primary = () => <ViralTweet color="primary" />;
export const Secondary = () => <ViralTweet color="secondary" />;
export const Color = () => <ViralTweet color={color('color', '#00FF00')} />;
    