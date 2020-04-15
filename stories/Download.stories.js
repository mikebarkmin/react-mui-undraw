
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Download from '../src/Download';

export default {
  title: 'Download',
  component: Download,
};

export const Primary = () => <Download color="primary" />;
export const Secondary = () => <Download color="secondary" />;
export const Color = () => <Download color={color('color', '#00FF00')} />;
    