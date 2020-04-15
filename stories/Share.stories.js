
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Share from '../src/Share';

export default {
  title: 'Share',
  component: Share,
};

export const Primary = () => <Share color="primary" />;
export const Secondary = () => <Share color="secondary" />;
export const Color = () => <Share color={color('color', '#00FF00')} />;
    