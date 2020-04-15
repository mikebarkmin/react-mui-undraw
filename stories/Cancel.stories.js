
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Cancel from '../src/Cancel';

export default {
  title: 'Cancel',
  component: Cancel,
};

export const Primary = () => <Cancel color="primary" />;
export const Secondary = () => <Cancel color="secondary" />;
export const Color = () => <Cancel color={color('color', '#00FF00')} />;
    