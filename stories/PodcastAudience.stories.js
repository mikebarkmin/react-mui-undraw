
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PodcastAudience from '../src/PodcastAudience';

export default {
  title: 'PodcastAudience',
  component: PodcastAudience,
};

export const Primary = () => <PodcastAudience color="primary" />;
export const Secondary = () => <PodcastAudience color="secondary" />;
export const Color = () => <PodcastAudience color={color('color', '#00FF00')} />;
    