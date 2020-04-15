
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HackerMind from '../src/HackerMind';

export default {
  title: 'HackerMind',
  component: HackerMind,
};

export const Primary = () => <HackerMind color="primary" />;
export const Secondary = () => <HackerMind color="secondary" />;
export const Color = () => <HackerMind color={color('color', '#00FF00')} />;
    