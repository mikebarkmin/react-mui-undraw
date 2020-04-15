
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ShareOpinion from '../src/ShareOpinion';

export default {
  title: 'ShareOpinion',
  component: ShareOpinion,
};

export const Primary = () => <ShareOpinion color="primary" />;
export const Secondary = () => <ShareOpinion color="secondary" />;
export const Color = () => <ShareOpinion color={color('color', '#00FF00')} />;
    