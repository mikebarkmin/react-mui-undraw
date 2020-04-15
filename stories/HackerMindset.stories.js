
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HackerMindset from '../src/HackerMindset';

export default {
  title: 'HackerMindset',
  component: HackerMindset,
};

export const Primary = () => <HackerMindset color="primary" />;
export const Secondary = () => <HackerMindset color="secondary" />;
export const Color = () => <HackerMindset color={color('color', '#00FF00')} />;
    