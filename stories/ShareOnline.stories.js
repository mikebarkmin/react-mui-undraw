
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ShareOnline from '../src/ShareOnline';

export default {
  title: 'ShareOnline',
  component: ShareOnline,
};

export const Primary = () => <ShareOnline color="primary" />;
export const Secondary = () => <ShareOnline color="secondary" />;
export const Color = () => <ShareOnline color={color('color', '#00FF00')} />;
    