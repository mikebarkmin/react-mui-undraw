
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HighFive from '../src/HighFive';

export default {
  title: 'HighFive',
  component: HighFive,
};

export const Primary = () => <HighFive color="primary" />;
export const Secondary = () => <HighFive color="secondary" />;
export const Color = () => <HighFive color={color('color', '#00FF00')} />;
    