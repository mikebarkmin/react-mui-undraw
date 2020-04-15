
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ComposeMusic from '../src/ComposeMusic';

export default {
  title: 'ComposeMusic',
  component: ComposeMusic,
};

export const Primary = () => <ComposeMusic color="primary" />;
export const Secondary = () => <ComposeMusic color="secondary" />;
export const Color = () => <ComposeMusic color={color('color', '#00FF00')} />;
    