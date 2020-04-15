
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Upvote from '../src/Upvote';

export default {
  title: 'Upvote',
  component: Upvote,
};

export const Primary = () => <Upvote color="primary" />;
export const Secondary = () => <Upvote color="secondary" />;
export const Color = () => <Upvote color={color('color', '#00FF00')} />;
    