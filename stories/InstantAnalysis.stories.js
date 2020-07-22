
import React from 'react';
import { color } from '@storybook/addon-knobs';
import InstantAnalysis from '../src/InstantAnalysis';

export default {
  title: 'InstantAnalysis',
  component: InstantAnalysis,
};

export const Primary = () => <InstantAnalysis color="primary" />;
export const Secondary = () => <InstantAnalysis color="secondary" />;
export const Color = () => <InstantAnalysis color={color('color', '#00FF00')} />;
    