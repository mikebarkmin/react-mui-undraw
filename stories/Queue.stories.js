
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Queue from '../src/Queue';

export default {
  title: 'Queue',
  component: Queue,
};

export const Primary = () => <Queue color="primary" />;
export const Secondary = () => <Queue color="secondary" />;
export const Color = () => <Queue color={color('color', '#00FF00')} />;
    