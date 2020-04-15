
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Golf from '../src/Golf';

export default {
  title: 'Golf',
  component: Golf,
};

export const Primary = () => <Golf color="primary" />;
export const Secondary = () => <Golf color="secondary" />;
export const Color = () => <Golf color={color('color', '#00FF00')} />;
    