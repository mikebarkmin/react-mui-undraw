
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Options from '../src/Options';

export default {
  title: 'Options',
  component: Options,
};

export const Primary = () => <Options color="primary" />;
export const Secondary = () => <Options color="secondary" />;
export const Color = () => <Options color={color('color', '#00FF00')} />;
    