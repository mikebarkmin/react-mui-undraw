
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Browsing from '../src/Browsing';

export default {
  title: 'Browsing',
  component: Browsing,
};

export const Primary = () => <Browsing color="primary" />;
export const Secondary = () => <Browsing color="secondary" />;
export const Color = () => <Browsing color={color('color', '#00FF00')} />;
    