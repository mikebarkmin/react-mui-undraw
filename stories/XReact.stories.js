
import React from 'react';
import { color } from '@storybook/addon-knobs';
import XReact from '../src/XReact';

export default {
  title: 'XReact',
  component: XReact,
};

export const Primary = () => <XReact color="primary" />;
export const Secondary = () => <XReact color="secondary" />;
export const Color = () => <XReact color={color('color', '#00FF00')} />;
    