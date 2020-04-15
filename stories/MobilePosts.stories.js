
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobilePosts from '../src/MobilePosts';

export default {
  title: 'MobilePosts',
  component: MobilePosts,
};

export const Primary = () => <MobilePosts color="primary" />;
export const Secondary = () => <MobilePosts color="secondary" />;
export const Color = () => <MobilePosts color={color('color', '#00FF00')} />;
    