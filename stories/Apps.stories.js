
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Apps from '../src/Apps';

export default {
  title: 'Apps',
  component: Apps,
};

export const Primary = () => <Apps color="primary" />;
export const Secondary = () => <Apps color="secondary" />;
export const Color = () => <Apps color={color('color', '#00FF00')} />;
    