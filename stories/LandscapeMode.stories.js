
import React from 'react';
import { color } from '@storybook/addon-knobs';
import LandscapeMode from '../src/LandscapeMode';

export default {
  title: 'LandscapeMode',
  component: LandscapeMode,
};

export const Primary = () => <LandscapeMode color="primary" />;
export const Secondary = () => <LandscapeMode color="secondary" />;
export const Color = () => <LandscapeMode color={color('color', '#00FF00')} />;
    