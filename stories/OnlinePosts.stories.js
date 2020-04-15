
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlinePosts from '../src/OnlinePosts';

export default {
  title: 'OnlinePosts',
  component: OnlinePosts,
};

export const Primary = () => <OnlinePosts color="primary" />;
export const Secondary = () => <OnlinePosts color="secondary" />;
export const Color = () => <OnlinePosts color={color('color', '#00FF00')} />;
    