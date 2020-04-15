
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Following from '../src/Following';

export default {
  title: 'Following',
  component: Following,
};

export const Primary = () => <Following color="primary" />;
export const Secondary = () => <Following color="secondary" />;
export const Color = () => <Following color={color('color', '#00FF00')} />;
    