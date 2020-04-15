
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ShareLink from '../src/ShareLink';

export default {
  title: 'ShareLink',
  component: ShareLink,
};

export const Primary = () => <ShareLink color="primary" />;
export const Secondary = () => <ShareLink color="secondary" />;
export const Color = () => <ShareLink color={color('color', '#00FF00')} />;
    