
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Connected from '../src/Connected';

export default {
  title: 'Connected',
  component: Connected,
};

export const Primary = () => <Connected color="primary" />;
export const Secondary = () => <Connected color="secondary" />;
export const Color = () => <Connected color={color('color', '#00FF00')} />;
    