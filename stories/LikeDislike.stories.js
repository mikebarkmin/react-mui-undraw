
import React from 'react';
import { color } from '@storybook/addon-knobs';
import LikeDislike from '../src/LikeDislike';

export default {
  title: 'LikeDislike',
  component: LikeDislike,
};

export const Primary = () => <LikeDislike color="primary" />;
export const Secondary = () => <LikeDislike color="secondary" />;
export const Color = () => <LikeDislike color={color('color', '#00FF00')} />;
    